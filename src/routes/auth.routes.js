import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';
import { log } from '../middleware/log.middleware.js';

const router = Router();

router.post('/login', log, AuthController.login);
router.post('/logout', log, AuthController.logout);
router.get('/check', log, AuthController.check);

export default router;