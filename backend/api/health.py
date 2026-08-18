from fastapi import APIRouter

from backend.config.settings import settings
from backend.schemas.health import HealthResponse

router = APIRouter()


@router.get("/health", response_model=HealthResponse, tags=["Health"])
async def health() -> HealthResponse:
    return HealthResponse(
        status="ok",
        service=settings.APP_NAME,
        version=settings.APP_VERSION,
    )
