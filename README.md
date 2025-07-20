## nbk-backoffice

An Angular frontend application for the NBK Backoffice customer management system.

### Overview

This project provides a modern, responsive admin interface for managing customers with secure JWT authentication, full CRUD operations, and seamless integration with the Spring Boot backend.

### Features

- JWT-based authentication with automatic token management
- Protected routes with auth guards
- Complete customer CRUD operations (Create, Read, Update, Delete)
- Form validation and error handling
- Responsive design for desktop and mobile
- Loading states and user feedback
- Secure logout functionality

### Tech Stack

- Angular 19.2.15
- TypeScript
- RxJS for reactive programming
- Angular Router for navigation
- Angular Forms for form handling
- Modern CSS with flexbox/grid

### Prerequisites

- Node.js 18+ and npm
- Angular CLI (`npm install -g @angular/cli`)
- NBK Backoffice backend running on `http://localhost:8080`

### Usage

#### Authentication
- **Login URL:** `/login`
- **Default credentials:** `admin` / `admin123`
- Tokens are automatically stored and included in API requests

#### Customer Management
- **List customers:** View all customers in a responsive table
- **Add customer:** Complete form with validation for new customers
- **View details:** Detailed customer information display
- **Edit customer:** Update customer information (password not required)
- **Delete customer:** Remove customers with confirmation dialog

### API Integration

The frontend integrates with the following backend endpoints:

- `POST /auth/login` - Admin authentication
- `GET /customers` - Retrieve all customers
- `GET /customers/{id}` - Retrieve one customer
- `POST /customers` - Create new customer
- `PUT /customers/{id}` - Update customer
- `DELETE /customers/{id}` - Delete customer

### Security Features

- Route protection with auth guards
- Automatic JWT token handling
- Secure logout with token cleanup
- Protected API endpoints with bearer authentication
