# Trinitas API

A lightweight Node.js backend replacement for the equivalent PHP api used before. 

This is for my heartbreaker TTRPG Trinitas.

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
   # Development (with auto-reload)
   npm run dev

   # Production
   npm start
   ```

---

## Endpoints

### Authentication
| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/auth/login` | Returns a JWT token when given valid credentials. |
| `GET` | `/api/auth/check` | Validates current session status. Bit of a holdover really. |

### Powers
| Method | Endpoint | Role | Description |
| --- | --- | --- | --- |
| `GET` | `/api/powers` | Standard | Fetch all powers. |
| `GET` | `/api/powers/:name` | Standard | Fetch a specific power by name. |
| `POST` | `/api/powers` | **Admin** | Create a new power. |
| `PUT` | `/api/powers` | **Admin** | Update an existing power (uses `oldName`). |
| `DELETE` | `/api/powers/:name` | **Admin** | Remove a power. |

---

## Authentication
Protected routes require a **Bearer Token** in the Authorization header:

```http
Authorization: Bearer <jwt_token>
```

---

## Project

Other than using Express, the focus of this project was organisation and "clean, extensible" design.

- `/src/controllers`: Request/Response handling.
- `/src/repositories`: File I/O and data persistence.
- `/src/routes`: Route definitions and middleware mapping.
- `/src/middleware`: JWT validation and Role-based access control.
- `/src/contracts`: Functional DTOs for type-safe data handling and type-annotation definitions.
- `/src/assets`: Data storage (pure JSON for readable data and ease of use in the frontend).