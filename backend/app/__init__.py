from contextlib import asynccontextmanager

from fastapi import FastAPI

from backend.api import health_router
from backend.api.v1 import router as api_v1_router
from backend.config.settings import settings
from backend.core.logger import setup_logging
from backend.middleware import register_exception_handlers, register_middlewares


@asynccontextmanager
async def lifespan(app: FastAPI):
    setup_logging()
    yield


def create_application() -> FastAPI:
    app = FastAPI(
        title=settings.APP_NAME,
        version=settings.APP_VERSION,
        description="Backend API for MemoryMind AI",
        docs_url="/docs",
        redoc_url="/redoc",
        openapi_url="/openapi.json",
        lifespan=lifespan,
    )

    app.include_router(health_router)
    app.include_router(api_v1_router, prefix=settings.API_PREFIX)

    register_exception_handlers(app)
    register_middlewares(app)

    return app


app = create_application()
