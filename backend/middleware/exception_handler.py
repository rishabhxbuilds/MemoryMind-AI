from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from loguru import logger


def register_exception_handlers(app: FastAPI) -> None:
    @app.exception_handler(HTTPException)
    async def http_exception_handler(request: Request, exc: HTTPException):
        return JSONResponse(
            status_code=exc.status_code,
            content={"error": {"type": "http_exception", "detail": exc.detail}},
        )

    @app.exception_handler(Exception)
    async def generic_exception_handler(request: Request, exc: Exception):
        logger.error("Unhandled exception", exc_info=True)
        return JSONResponse(
            status_code=500,
            content={
                "error": {
                    "type": "server_error",
                    "detail": "An unexpected error occurred.",
                }
            },
        )
