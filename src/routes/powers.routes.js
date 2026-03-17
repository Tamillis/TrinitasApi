import { Router } from 'express';
import { PowersController } from '../controllers/powers.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { authorise } from '../middleware/role.middleware.js';
import { log } from '../middleware/log.middleware.js';

const router = Router();

const adminOnly = [log, protect, authorise('admin')];

router.get('/:name?', log, PowersController.get);
router.post('/', adminOnly, PowersController.post);
router.put('/', adminOnly, PowersController.put);
router.delete('/:name', adminOnly, PowersController.delete);

export default router;