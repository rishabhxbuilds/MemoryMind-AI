# MemoryMind AI Frontend

## Overview

This frontend folder contains the foundation for the MemoryMind AI React application. It is designed for a scalable, modular, and production-ready architecture.

## Folder Structure

- `src/app/` - application root and bootstrapping
- `src/routes/` - route definitions and navigation structure
- `src/pages/` - page-level views
- `src/layout/` - layouts and page scaffolding
- `src/components/` - reusable UI components
- `src/ui/` - primitive UI building blocks
- `src/contexts/` - React context providers
- `src/services/` - application services and providers
- `src/api/` - API client configuration
- `src/types/` - shared TypeScript types
- `src/utils/` - utility helpers
- `src/styles/` - global and Tailwind styles
- `src/config/` - application configuration and constants
- `public/` - static public assets
- `tests/` - frontend test folder structure

## Installation

From the `frontend` directory, install dependencies with:

```bash
npm install
```

## Running Locally

Start the development server with:

```bash
npm run dev
```

## Building for Production

Build the application with:

```bash
npm run build
```

## Routing

Routing is managed with React Router v6 in `src/routes/AppRoutes.tsx`. The application has a top-level layout and supports a home page and a 404 fallback page.
