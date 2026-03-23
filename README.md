# Convocation Gown Management System

A full-stack web application for managing convocation gown orders. Built with:
- Backend: ASP.NET Core 8 + Entity Framework Core + PostgreSQL
- Frontend: React + Vite
- Containerized with Docker Compose

## Running the project
Make sure you have **Docker Desktop** installed and running.

Clone the repo:
```bash
git clone <repo-url>
cd convocation-gown-system
git checkout <branch-name>

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
