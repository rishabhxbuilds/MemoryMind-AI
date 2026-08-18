# Quick Start Guide - MemoryMind AI

## Prerequisites
- Python 3.11+ with virtual environment activated
- Node.js 18+ with npm
- Git (optional, for version control)

---

## 1. Start the Backend (FastAPI)

### First Time Setup
```bash
# Navigate to project root
cd "D:\CORE PROJECTS\MemoryMind AI\MemoryMind-AI"

# Verify virtual environment is active (should see .venv in path)
# If not: .venv\Scripts\activate

# Install dependencies (should already be done)
pip install -r backend/requirements.txt
```

### Run Backend Development Server
```bash
cd backend
python main.py
```

**Backend will be available at:**
- Main API: http://localhost:8000
- Health Check: http://localhost:8000/health
- API Docs (Swagger): http://localhost:8000/docs
- API Docs (ReDoc): http://localhost:8000/redoc

---

## 2. Start the Frontend (React + Vite)

### First Time Setup
```bash
# Navigate to frontend directory
cd "D:\CORE PROJECTS\MemoryMind AI\MemoryMind-AI\frontend"

# Install dependencies (should already be done)
npm install
```

### Run Frontend Development Server
```bash
npm run dev
```

**Frontend will be available at:**
- Application: http://localhost:5173
- Hot reload enabled for live development

---

## 3. API Communication

### From Frontend to Backend
The frontend is configured to communicate with the backend at `http://localhost:8000`. 
See [frontend/src/api/axios.ts](frontend/src/api/axios.ts) for configuration.

### Testing API Endpoints
Use Swagger UI at http://localhost:8000/docs to test endpoints directly.

---

## 4. Development Workflow

### Making Code Changes

#### Backend Changes
1. Edit files in `backend/`
2. Server auto-reloads with `--reload` flag
3. Tests update automatically
4. Run tests: `pytest backend/tests/ -v`

#### Frontend Changes
1. Edit files in `frontend/src/`
2. Browser auto-refreshes (hot reload)
3. TypeScript errors shown in console
4. Run build: `npm run build`

### Code Quality

#### Before Committing Code
```bash
# Backend
ruff check backend/
black backend/
pytest backend/tests/ -v

# Frontend
npm run lint
npm run format
npm run build
```

---

## 5. File Locations

### Backend Entry Point
- **File**: `backend/main.py`
- **Function**: Starts uvicorn server
- **Port**: 8000 (configurable via environment)

### Frontend Entry Point
- **File**: `frontend/src/main.tsx`
- **Framework**: React 18 with TypeScript
- **Port**: 5173 (via Vite dev server)

### Configuration Files
- **Backend**: `backend/config/settings.py` (uses `.env` file)
- **Frontend**: `frontend/vite.config.ts`, `frontend/tsconfig.json`

---

## 6. Useful Commands

### Backend
```bash
# Run tests
pytest backend/tests/ -v

# Run specific test
pytest backend/tests/test_health.py::test_health_endpoint -v

# Linting
ruff check backend/
ruff check backend/ --fix  # Auto-fix issues

# Formatting
black backend/

# Install new package
pip install package_name
pip freeze > requirements.txt  # Update requirements
```

### Frontend
```bash
# Run linting
npm run lint

# Format code
npm run format

# Build for production
npm run build

# Preview production build
npm run preview

# Install new package
npm install package_name
```

---

## 7. Troubleshooting

### Backend Won't Start
```bash
# Check Python version
python --version  # Should be 3.11+

# Check virtual environment
pip list  # Should show installed packages

# Reinstall dependencies
pip install -r backend/requirements.txt --force-reinstall
```

### Frontend Won't Start
```bash
# Check Node version
node --version  # Should be 18+
npm --version

# Clear cache and reinstall
rm -r node_modules
rm package-lock.json
npm install

# Port already in use?
# Kill process on port 5173 or use different port
```

### API Connection Issues
1. Verify backend is running: http://localhost:8000/health
2. Check CORS configuration in `backend/app/__init__.py`
3. Check axios base URL in `frontend/src/api/axios.ts`

### Tests Failing
```bash
# Run with verbose output
pytest backend/tests/ -v -s

# Run specific test
pytest backend/tests/test_health.py -v
```

---

## 8. Environment Variables

### Backend Configuration
Create `.env` file in project root:
```bash
# Server config
HOST=127.0.0.1
PORT=8000
DEBUG=True

# Add more as needed per settings.py
```

### Frontend
Environment variables in `frontend/.env.local` (create if needed):
```bash
VITE_API_URL=http://localhost:8000
```

---

## 9. Project Structure at a Glance

```
MemoryMind-AI/
├── backend/
│   ├── app/          - FastAPI app initialization
│   ├── api/          - API routes
│   ├── main.py       - Entry point
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── app/      - Root App component
│   │   ├── pages/    - Page components
│   │   ├── components/ - React components
│   │   └── api/      - Backend communication
│   ├── package.json
│   └── vite.config.ts
│
└── docs/             - Documentation
```

---

## 10. Next Steps

1. **Start Backend**: `cd backend && python main.py`
2. **Start Frontend**: `cd frontend && npm run dev`
3. **Open Browser**: http://localhost:5173
4. **Check API**: http://localhost:8000/docs
5. **Start Developing**: Create features following existing patterns

---

## Common Issues Checklist

- [ ] Virtual environment activated (for Python)
- [ ] Both backend and frontend running
- [ ] Ports 8000 and 5173 are available
- [ ] No console errors in browser
- [ ] No console errors in backend terminal
- [ ] All tests passing
- [ ] Code passes linting checks

---

**Happy Coding! 🚀**
