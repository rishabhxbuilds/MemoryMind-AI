import time

from fastapi import Request
from loguru import logger


async def request_logging_middleware(request: Request, call_next):
    logger.info("HTTP request start: %s %s", request.method, request.url.path)
    start_time = time.time()
    response = await call_next(request)
    duration = time.time() - start_time
    logger.info(
        "HTTP request complete: %s %s status_code=%s duration=%.3fs",
        request.method,
        request.url.path,
        response.status_code,
        duration,
    )
    return response
