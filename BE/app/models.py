# app/models.py
from pydantic import BaseModel
from typing import Optional

class PredictionRequest(BaseModel):
    building: str
    subsystem: str
    floor: Optional[int] = None  # Floor sekarang opsional
    time_range: str  # 24h, 7d, 4w
