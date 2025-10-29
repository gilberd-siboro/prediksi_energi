from fastapi import APIRouter
from typing import Optional  # Tambahkan ini untuk Optional
from app.models import PredictionRequest
from app.utils import load_and_train_model, make_predictions

# Inisialisasi router 
router = APIRouter()

# Endpoint untuk prediksi dengan floor (opsional, tapi path ini untuk dengan floor)
@router.post("/predict/{building}/{subsystem}/{floor}/{time_range}")
async def predict_with_floor(building: str, subsystem: str, floor: int, time_range: str):
    return await predict(building, subsystem, time_range, floor=floor)

# Endpoint untuk prediksi tanpa floor
@router.post("/predict/{building}/{subsystem}/{time_range}")
async def predict_without_floor(building: str, subsystem: str, time_range: str):
    return await predict(building, subsystem, time_range, floor=None)

# Fungsi utama predict (dibuat async untuk konsistensi)
async def predict(building: str, subsystem: str, time_range: str, floor: Optional[int] = None):
    # Validasi inputan rentang waktu
    if time_range not in ["24h", "7d", "4w"]: 
        return {"error": "Invalid time range. Please choose 24h, 7d, or 4w."}

    # Menyesuaikan dengan input user (building, subsystem, floor) 
    try:
        models = load_and_train_model(building, subsystem, floor)
    except FileNotFoundError:
        return {"error": "Data file not found for the given parameters."}
    except Exception as e:
        return {"error": f"An error occurred while loading/training model: {str(e)}"}

    # Lakukan prediksi sesuai rentang waktu 
    try:
        prediction_results = make_predictions(models, time_range)
    except Exception as e:
        return {"error": f"An error occurred during prediction: {str(e)}"}

    # Kembalikan hasil prediksi 
    return {"predictions": prediction_results}
