import sys

from loguru import logger

from backend.config.settings import settings


def setup_logging() -> None:
    logger.remove()
    logger.add(
        sys.stdout,
        level="DEBUG" if settings.DEBUG else "INFO",
        format="<green>{time:YYYY-MM-DD HH:mm:ss.SSS}</green> | <level>{level}</level> | <cyan>{module}</cyan>:<cyan>{line}</cyan> - <level>{message}</level>",
        colorize=True,
    )
