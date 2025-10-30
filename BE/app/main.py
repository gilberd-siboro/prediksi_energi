from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import prediction 

# Inisialisasi FastAPI
app = FastAPI()

# Menambahkan middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Menambahkan alamat frontend
    allow_credentials=True,
    allow_methods=["*"],  # Mengizinkan semua metode HTTP
    allow_headers=["*"],  # Mengizinkan semua header
)

# Menambahkan router untuk prediksi
app.include_router(prediction.router)