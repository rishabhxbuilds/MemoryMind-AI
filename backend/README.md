# MemoryMind AI Backend

## Overview

This backend folder contains the foundational FastAPI application for MemoryMind AI.

## Folder Structure

- `app/` - application factory and startup configuration
- `api/` - route definitions and versioned API structure
- `config/` - environment and settings management
- `core/` - logging and core application utilities
- `middleware/` - request and error middleware
- `dependencies/` - dependency injection placeholders
- `schemas/` - response and request models
- `models/` - domain model placeholders
- `services/` - service layer placeholders
- `repositories/` - persistence layer placeholders
- `utils/` - utility helpers and helpers
- `tests/` - test cases for backend endpoints
- `main.py` - application entrypoint
- `requirements.txt` - Python dependency manifest
- `.env.example` - environment variables example
- `pyproject.toml` - tooling configuration for Black, Ruff, and Pytest

## Running Locally

1. Create a virtual environment for Python 3.11+.
2. Install dependencies using `pip install -r requirements.txt`.
3. Copy `.env.example` to `.env` and update values as needed.
4. Start the backend server:

```bash
uvicorn backend.main:app --reload
```

Or from the backend folder:

```bash
python main.py
```

## Testing

Run tests with:

```bash
pytest backend/tests
```

## Notes

This project foundation is intentionally implementation-light. It provides the backend architecture, configuration, and health check endpoint without any business logic.
