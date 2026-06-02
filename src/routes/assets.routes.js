import { Router } from 'express';
import { log } from '../middleware/log.middleware.js';
import { authorise, identify, validateAssetPath } from '../middleware/auth.middleware.js';
import { checkRole } from '../middleware/role.middleware.js';
import { AssetController } from '../controllers/assets.controller.js';
import { assetRepository } from '../repositories/assets.repo.js';

const router = Router();

router.use('/', identify, log);

router.get('/nav', AssetController.getNavigation);

router.get('/:system/*', AssetController.get)


router.post('/', authorise, checkRole('admin'), validateAssetPath, AssetController.saveAsset);

export default router;