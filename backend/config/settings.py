import os
from pathlib import Path

from dotenv import load_dotenv
from pydantic import BaseModel, ConfigDict, Field, SecretStr

config_directory = Path(__file__).resolve().parent.parent
dotenv_path = config_directory / ".env"
load_dotenv(dotenv_path=dotenv_path, override=False)


class Settings(BaseModel):
    model_config = ConfigDict(extra="ignore")

    APP_NAME: str = Field("MemoryMind AI Backend")
    APP_VERSION: str = Field("0.1.0")
    DEBUG: bool = Field(False)
    HOST: str = Field("127.0.0.1")
    PORT: int = Field(8000)
    API_PREFIX: str = Field("/api/v1")
    SECRET_KEY: SecretStr = Field(...)


settings = Settings.model_validate(os.environ)
