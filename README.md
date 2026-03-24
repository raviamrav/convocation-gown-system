# Convocation Gown Management System

A full-stack web application for managing convocation gown orders. Built with:
- Backend: ASP.NET Core 8 + Entity Framework Core + PostgreSQL
- Frontend: React + Vite
- Containerized with Docker Compose

## Running the project
**Prerequisites**
- Make sure you have **Docker Desktop** installed and running. (Windows/Mac/Linux)
- Git
* No need to install VS/VSCode to run the Dockerized system. You only need an IDE if you want to modify code.

## Tech Stack
* ASP.NET Core Web API
* C#
* Entity Framework Core
* PostgreSQL
* Swagger (API documentation)
* Git + GitHub

## Features
* Create gowns
* Create orders
* Add multiple items to an order
* Calculate total order amount
* REST API architecture
* DTO-based request/response models
* Service layer architecture

## Project Architecture
```
ConvocationGown.Api           → Controllers + DTOs + Services  
ConvocationGown.Core          → Domain Entities  
ConvocationGown.Infrastructure → Database + EF Core
```

**Setup & Run**
1. Clone the repository
git clone https://github.com/raviamrav/convocation-gown-system.git
cd convocation-gown-system

2. Ensure the database initialization folder exists
db-init/gown_initial.sql  # Contains initial test data

3. Bring down any existing containers (if needed)
docker compose down

4. Remove existing Docker volume (if you want to reset DB)
docker volume rm convocation-gown-system_pgdata

5. Build and run the system
docker compose up --build

6. Access the application
API Swagger: http://localhost:5050/swagger/index.html
Frontend: http://localhost:5173/

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
**Environment Variables
**Copy .env.example to .env
Update the values:
VITE_API_URL=http://localhost:5050/api
DB_HOST=<your-database-host>
DB_NAME=<your-database-name>
DB_USER=<your-db-user>
DB_PASSWORD=<your-db-password>
DB_PORT=5432
DB_SSLMODE=Require
**For local Docker Postgres, use:
**DB_HOST=localhost
DB_NAME=ConvocationGownDb
DB_USER=postgres
DB_PASSWORD=secret
DB_PORT=5432
DB_SSLMODE=Disable
For Neon live DB, use the connection string from Neon.
Running Locally
**Backend**
cd backend/ConvocationGown.Api
dotnet run --project ConvocationGown.Api.csproj
**Frontend**
cd frontend
npm install
npm run dev
Backend runs on http://localhost:5050
Frontend runs on http://localhost:5173
**Docker (Optional Local Setup)
**docker-compose up --build
The backend connects to either Docker Postgres or Neon DB based on .env configuration.
The database container is optional if you are testing with Neon DB.
**Testing Neon DB Connection
**Ensure .env has Neon DB credentials.
Run backend locally, and Swagger UI should connect and apply migrations to the Neon DB.
Verify data using Neon Dashboard
.
**Notes for Developers
**Do not commit .env with secrets. Use .env.example as a reference.
All DB migrations are applied automatically on startup.
Frontend calls backend via VITE_API_URL.

## Future Improvements
* Order status workflow
* Authentication (JWT)
* Admin panel


## Author
Portfolio project by Ravivarma
