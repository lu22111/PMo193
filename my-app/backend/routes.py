from fastapi import APIRouter
from app.data import nombres  # Cambio aquí: app.data en lugar de solo data

router = APIRouter()

@router.get("/nombres")
def get_nombres():
    return nombres