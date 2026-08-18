from fastapi import FastAPI

from backend.middleware.cors import add_cors_middleware
from backend.middleware.exception_handler import (
    register_exception_handlers as register_exception_handlers,
)
from backend.middleware.request_logger import request_logging_middleware


def register_middlewares(app: FastAPI) -> None:
    add_cors_middleware(app)
    app.middleware("http")(request_logging_middleware)
