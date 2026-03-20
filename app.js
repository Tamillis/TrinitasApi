import express from 'express';
import authRoutes from './src/routes/auth.routes.js';
import powersRoutes from './src/routes/powers.routes.js';
import { docRules } from './src/middleware/docs.middleware.js';
import { SimpleController } from './src/controllers/simple.controller.js';

const app = express();

// Standard Middleware
app.use(express.json());

app.use('/api/docs', docRules);

// Full Routes
app.use('/api/auth', authRoutes);
app.use('/api/powers', powersRoutes);

// Simple Gets
const assets = ["backgrounds", "equipment", "packs", "races", "skills", "spells"];
assets.forEach(asset => {
    app.get("/api/" + asset, SimpleController.get)
});

//sense check
app.get('/api/debug', (req, res) => res.send('{"msg": "API is awake!"}'));

// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});