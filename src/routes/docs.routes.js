import { Router } from 'express';
import { log } from '../middleware/log.middleware.js';
import { authorise, identify, validateDocPath } from '../middleware/auth.middleware.js';
import { checkRole } from '../middleware/role.middleware.js';
import { DocsController } from '../controllers/docs.controller.js';
import { docRules } from '../middleware/docs-serve.middleware.js';

const router = Router();

router.use('/', identify, log);

router.get('/nav', DocsController.getNavigation);

router.use('/', docRules);
router.post('/', authorise, checkRole('admin'), validateDocPath, DocsController.saveDocument);

export default router;