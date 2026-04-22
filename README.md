# Convocation Gown - Rental Management System

A full-stack web application for managing convocation gown orders. Built with:

- Backend: ASP.NET Core 8 + Entity Framework Core + PostgreSQL
- Frontend: React + Vite
- Containerized with Docker Compose

# Currently the project is LIVE

- frontend: https://convocation-gown-system.vercel.app/
- backend: https://convocation-gown-system.onrender.com
- Swagger: https://convocation-gown-system.onrender.com/swagger/index.html
- Configured cronjob in cron.job.org to avoid render sleep
- SEO (Search Engine Optimization) - WIP

## Installation & Running the project

To install the Convocation Gown System, follow these steps:

**Prerequisites**

- Make sure you have **Docker Desktop** installed and running. (Windows/Mac/Linux)
- Git

* No need to install VS/VSCode to run the Dockerized system. You only need an IDE if you want to modify code.

## Tech Stack

- ASP.NET Core Web API
- C#
- Entity Framework Core
- PostgreSQL
- Swagger (API documentation)
- Git + GitHub

## Features

- Create gowns
- Create orders
- Add multiple items to an order
- Calculate total order amount
- REST API architecture
- DTO-based request/response models
- Service layer architecture

## Project Architecture

```
ConvocationGown.Api           → Controllers + DTOs + Services
ConvocationGown.Core          → Domain Entities
ConvocationGown.Infrastructure → Database + EF Core
```

**Setup & Run**

1.  Clone the repository
    C:\test\> git clone https://github.com/raviamrav/convocation-gown-system.git
    cd convocation-gown-system

2.  setup/create env file

    # for Docker

    2.1. Copy .env.example to root convocation-gown-system\.env
    Update the values: refer **Environment Variables** below

    # for manual execution

    2.2. Copy .env.example to convocation-gown-system\backend\ConvocationGown.Api\.env
    Update the values: refer **Environment Variables** below

    2.3. convocation-gown-system\frontend\.env
    VITE_API_URL=http://localhost:5050/api

3.  Build project
    Option 1: through Docker - open docker.desktop / start docker engine
    PS C:\test\convocation-gown-system> docker compose up --build
    open http://localhost:5173

        *Bring down any existing containers (if needed)
        docker compose down

    Option 2: Manual execution
    Open # Terminal 1 — backend
    cd backend
    dotnet run --project .\ConvocationGown.Api\ConvocationGown.Api.csproj

        Open # Terminal 2 — frontend
        cd frontend
        npm install
        npm run dev
        open http://localhost:5173

4.  Access the application
    Frontend runs on http://localhost:5173
    Backend runs on http://localhost:5050
    API Swagger: http://localhost:5050/swagger/index.html

## API Endpoints

### Gown

```
POST /api/gown
GET /api/gown
GET /api/gown/{id}
```

### Orders

```
POST /api/order
GET /api/order
GET /api/order/{id}
```

**Environment Variables**
Copy .env.example to .env
Update the values:
DB_HOST=<your-database-host>
DB_NAME=<your-database-name>
DB_USER=<your-db-user>
DB_PASSWORD=<your-db-password>
DB_PORT=5432
DB_SSLMODE=Require
**For local Docker Postgres, use:**
DB_HOST=localhost
DB_NAME=ConvocationGownDb
DB_USER=postgres
DB_PASSWORD=secret
DB_PORT=5432
DB_SSLMODE=Disable
For Neon live DB, use the connection string from Neon.

**Notes for Developers
**Do not commit .env with secrets. Use .env.example as a reference.
All DB migrations are applied automatically on startup.
Frontend calls backend via VITE_API_URL.
The backend connects to either Docker Postgres or Neon DB based on .env configuration.
The database container is optional if you are testing with Neon DB.
**Testing Neon DB Connection
**Ensure .env has Neon DB credentials.
Run backend locally, and Swagger UI should connect and apply migrations to the Neon DB.
Verify data using Neon Dashboard

## Future Improvements

- Order status workflow
- Authentication (JWT)
- Admin panel
- Agentic AI for admin users to generate reports and statastics

## Author

Portfolio project by Ravivarma Singarvelu
for any questions reach me at raviamrav@yahoo.com
