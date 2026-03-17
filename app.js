import express from 'express';
import authRoutes from './src/routes/auth.routes.js';
import powersRoutes from './src/routes/powers.routes.js';

const app = express();

// Standard Middleware
app.use(express.json());

// For your C# / Raylib client, you might need CORS if they aren't on the same domain
// import cors from 'cors';
// app.use(cors());

// Modular Routes
app.use('/api/auth', authRoutes);
app.use('/api/powers', powersRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});