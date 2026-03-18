import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';
import { log } from '../middleware/log.middleware.js';
import { identify } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/login', identify, log, AuthController.login);

export default router;