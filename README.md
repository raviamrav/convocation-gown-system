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

# Features

## Customer Features

- Browse available gowns
- Create rental orders
- Add multiple items to an order
- Automatic order total calculation

## Backend Features

- REST API architecture
- DTO-based request/response models
- Service layer architecture
- Entity Framework Core
- Docker support
- Swagger API documentation

## Security

- JWT Authentication
- Role-based Authorization (Admin)
- Password hashing
- Protected Admin endpoints
- Swagger JWT Bearer authentication

## Project Architecture

```
ConvocationGown.Api           → Controllers + DTOs + Services + Authentication
ConvocationGown.Core          → Domain Entities
ConvocationGown.Infrastructure → Database + EF Core
```

**Setup & Run**
```
1.  Clone the repository
    PS: \test\> git clone https://github.com/raviamrav/convocation-gown-system.git
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
    PS: \test\convocation-gown-system> docker compose up --build
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
```
## API Endpoints

## Authentication

```
POST /api/auth/login
GET  /api/auth/me
```

### Gown

```
GET    /api/gown
GET    /api/gown/{id}

POST   /api/gown        (Admin)

PUT    /api/gown/{id}   (Admin)

DELETE /api/gown/{id}   (Admin)
```

### Orders

```
POST /api/order
GET /api/order
GET /api/order/{id}
```

**Environment Variables**
```
Copy .env.example to .env
Update the values:
DB_HOST=<your-database-host>
DB_NAME=<your-database-name>
DB_USER=<your-db-user>
DB_PASSWORD=<your-db-password>
DB_PORT=5432
DB_SSLMODE=Require
JWT_KEY=<YourSecretKeyTextForAuthentication>
**For local Docker Postgres, use:**
DB_HOST=localhost
DB_NAME=ConvocationGownDb
DB_USER=postgres
DB_PASSWORD=secret
DB_PORT=5432
DB_SSLMODE=Disable
JWT_KEY=<YourSecretKeyTextForAuthentication>
For Neon live DB, use the connection string from Neon.
```

**Notes for Developers
```
**Do not commit .env with secrets. Use .env.example as a reference.
All DB migrations are applied automatically on startup.
Frontend calls backend via VITE_API_URL.
The backend connects to either Docker Postgres or Neon DB based on .env configuration.
The database container is optional if you are testing with Neon DB.
**Testing Neon DB Connection
**Ensure .env has Neon DB credentials.
Run backend locally, and Swagger UI should connect and apply migrations to the Neon DB.
Verify data using Neon Dashboard
```

## Future Improvements

- React Admin Dashboard
- Customer Authentication
- Refresh Tokens
- Password Reset
- Email Notifications
- Order Status Workflow
- Reporting Dashboard
- Agentic AI for reporting and analytics

## App Screens
Home Page:
<img width="949" height="935" alt="image" src="https://github.com/user-attachments/assets/ccd0944f-2e29-4980-8859-c5b2caad7ec9" />
Gowns List:
<img width="954" height="937" alt="image" src="https://github.com/user-attachments/assets/6140d043-4b54-4f1e-bbda-a94005c373c3" />
Order Creation:
<img width="933" height="942" alt="image" src="https://github.com/user-attachments/assets/71a139ee-4558-4268-a312-c8db8502a41a" />
Swagger API:
<img width="1719" height="964" alt="image" src="https://github.com/user-attachments/assets/e73416ab-1ee2-4e51-937d-67576681f681" />


## Author
**Ravivarma Singaravelu**

Portfolio  
https://raviamrav.github.io/

LinkedIn  
https://www.linkedin.com/in/ravivarma-singaravelu/

GitHub  
https://github.com/raviamrav

Email  
raviamrav@yahoo.com
