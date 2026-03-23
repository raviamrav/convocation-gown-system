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

## Future Improvements
* Order status workflow
* Authentication (JWT)
* Admin panel


## Author
Portfolio project by Ravivarma
