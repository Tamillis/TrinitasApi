import { Router } from 'express';
import { PowersController } from '../controllers/powers.controller.js';
import { authorise, identify } from '../middleware/auth.middleware.js';
import { checkRole } from '../middleware/role.middleware.js';
import { log } from '../middleware/log.middleware.js';

const router = Router();

const adminOnly = [identify, log, authorise, checkRole('admin')];

router.get('/:name?', identify, log, PowersController.get);
router.post('/', adminOnly, PowersController.post);
router.put('/', adminOnly, PowersController.put);
router.delete('/:name', adminOnly, PowersController.delete);

export default router;