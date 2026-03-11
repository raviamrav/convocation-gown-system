# Convocation Gown Management System

A backend API for managing convocation gown rentals for universities.

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
* React frontend
* Docker deployment
* CI/CD pipeline

## Author

Portfolio project by Ravivarma
