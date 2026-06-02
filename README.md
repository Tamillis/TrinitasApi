# Trinitas API

A lightweight Node.js backend replacement for the equivalent PHP api used before.

Only now it actually is a full stand-in replacement for all my API needs on my website, and my various projects (namely the TTRPG heartbreakers Trinitas and Crescens).

Currently Trinitas is abandoned after a partial overhaul that ended up becoming the new darling Crescens.

This project is also a chance to practice a modular Express.js server using middleware and with JWT authentication.

## Setup

1. **Clone & Install**
   ```bash
   git clone https://github.com/Tamillis/TrinitasApi.git
   cd TrinitasApi
   npm install
   ```

2. **Environment Configuration**
   Create a `.env` file in the root (use `.env.example` as a guide):
   ```env
   PORT=3000
   USER=my_username         # I plan on replacing this with a user system later, for now there is only one: me
   PASSWORD=my_password
   JWT_SECRET=random_secret_string
   ```

3. **Run the Server**
   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

## Authentication
Protected routes require a **Bearer Token** in the Authorization header:

```http
Authorization: Bearer <jwt_token>
```

## Project

Other than using Express, the focus of this project was organisation and "clean, extensible" design:

- `/src/controllers`: Request/Response handling.
- `/src/repositories`: File I/O and data persistence.
- `/src/routes`: Route definitions and middleware mapping.
- `/src/middleware`: JWT validation and Role-based access control, logging, filepath validation etc
- `/src/contracts`: Functional DTOs for type-safe data handling and type-annotation definitions.
- `/src/assets`: Data storage (pure JSON for readable data and ease of use in the frontend).