import { Router } from 'express';
import { log } from '../middleware/log.middleware.js';
import { identify } from '../middleware/auth.middleware.js';
import { docRules } from '../middleware/docs.middleware.js';

const router = Router();

router.use('/', identify, log, docRules);

export default router;