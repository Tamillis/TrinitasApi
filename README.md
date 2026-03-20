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

| Method | Endpoint | Role | Description |
| --- | --- | --- | --- |
| **Auth** |
| `POST` | `/api/auth/login` | - | Returns a JWT token when given valid credentials valid for 1 hour |
| **Powers** |
| `GET` | `/api/powers` | - | Fetch all powers. |
| `GET` | `/api/powers/:name` | - | Fetch a specific power by name. |
| `POST` | `/api/powers` | **Admin** | Create a new power. |
| `PUT` | `/api/powers` | **Admin** | Update an existing power (uses `oldName`). |
| `DELETE` | `/api/powers/:name` | **Admin** | Remove a power. |
| **Assets** |
| `GET` | `/api/backgrounds` | - | Fetch all backgrounds |
| `GET` | `/api/equipment` | - | Fetch all equipment |
| `GET` | `/api/packs` | - | Fetch all packs |
| `GET` | `/api/races` | - | Fetch all races |
| `GET` | `/api/skills` | - | Fetch all skills |
| `GET` | `/api/spells` | - | Fetch all spells |
| **Docs** |
| `GET` | `/api/docs/{doc_name}.md` | - | Fetch the name markdown documnet. |

### Documents
- `appendices.md` - minor rules
- `character-creation.md` - rules of character creation
- `combat.md` - rules of combat
- `core.md` - main rules including task resolution (dice rolls), character statistics and skills
- `crafting.md` - WIP rules for crafting
- `design-notes.md` - design notes blog I've haphazardly written over the years
- `equipment.md` - rules for and lists of equipment
- `introduction.md` - the introduction document for Trinitas
- `magic.md` - the rules of magic, and lists of meta-magic, and invocations
- `powers.md` - the rules for your role: powers and progression
- `premade-characters.md` - a few example premade characters
- `progression.md` - the rules of power progression
- `spells.md` - the rules for spells
- `stat-blocks.md` - the outline of a Trinitas stat block for non player characters, a few example stat blocs

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