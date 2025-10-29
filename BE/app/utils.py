import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, r2_score
from pathlib import Path
from typing import Optional  # Tambahkan ini

# Model prediksi
models = {
    "Random Forest": RandomForestRegressor(n_estimators=100, random_state=42),
    "Linear Regression": LinearRegression(),
    "Gradient Boosting": GradientBoostingRegressor(n_estimators=100, random_state=42)
}

def format_number(number):
    return f"{number:,.2f}"  # Format angka dengan pemisah ribuan dan dua angka di belakang koma

def load_and_train_model(building: str, subsystem: str, floor: Optional[int] = None):
    # Menentukan nama file dataset berdasarkan input
    if floor is not None:
        input_path = Path(f"./Data/{building}/{subsystem}/{building}_{subsystem}_L{floor}_hasil_interpolasi_1_jam.csv")
    else:
        input_path = Path(f"./Data/{building}/{subsystem}/{building}_{subsystem}_hasil_interpolasi_1_jam.csv")
    
    # Membaca dataset
    data = pd.read_csv(input_path)
    target_col = 'id_stand_energy_kirim'

    # Persiapkan data
    data = data.dropna(subset=[target_col])
    if data.empty:
        raise ValueError("Dataset is empty after dropping NaN values.")
    data['hour'] = np.arange(len(data)) % 24  # Menambahkan kolom 'hour' yang berulang dari 0 hingga 23
    X = data[['hour']]
    y = data[target_col]

    # Split data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, shuffle=False)

    # Latih model dan evaluasi
    results = {}
    for name, model in models.items():
        model.fit(X_train, y_train)
        pred = model.predict(X_test)
        mae = mean_absolute_error(y_test, pred)
        r2 = r2_score(y_test, pred)
        results[name] = {"Model": model, "MAE": format_number(mae), "R2": format_number(r2)}
    
    return results

def make_predictions(models, time_range: str):
    # Tentukan jumlah jam prediksi berdasarkan rentang waktu
    if time_range == "24h":
        future_hours = pd.DataFrame({"hour": range(24)})  # 24 jam
    elif time_range == "7d":
        future_hours = pd.DataFrame({"hour": range(168)})  # 7 hari = 168 jam
    elif time_range == "4w":
        future_hours = pd.DataFrame({"hour": range(672)})  # 4 minggu = 672 jam
    
    predictions = {name: model["Model"].predict(future_hours) for name, model in models.items()}
    
    # Hitung akumulasi total prediksi
    total_prediksi = {name: np.sum(pred) for name, pred in predictions.items()}
    
    # Gabungkan hasil prediksi, MAE, dan R2
    prediction_results = {}
    for name in predictions:
        prediction_results[name] = {
            "result": format_number(total_prediksi[name]),
            "mae": models[name]["MAE"],
            "R2": models[name]["R2"]
        }
    
    return prediction_results
