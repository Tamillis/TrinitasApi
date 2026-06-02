import { assetRepository } from '../repositories/assets.repo.js';

export class AssetController {
    static async get(req, res) {
        const system = req.params.system;
        const subPath = req.params[0];

        if (!subPath) {
            return res.status(400).json({ error: 'Url couldnt be parsed into asset' });
        }
        const asset = `${system}/${subPath}`;
        console.log("Trying to get asset: " + asset);

        try {
            const data = await assetRepository.get(asset);
            
            if (!data) {
                return res.status(404).json({ error: `Asset ${asset} not found` });
            }

            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch assets' });
        }
    }

    /**
     * CAUTION - this is an overrite path- only to be used where proper CRUD is too much for simple lists etc
     */
    static async saveAsset(req, res, next) {
        try {
            const { content } = req.body;
            const targetFilePath = req.safeDocPath;

            if (typeof content !== 'string')
                return res.status(400).json({ error: 'Content field is required.' });
            
            await assetRepository.updateFile(targetFilePath, content);

            res.status(200).json({ message: 'Asset file saved successfully.' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async getNavigation(req, res, next) {
        try {
            const assetKeys = assetRepository.getAssetMap();
            return res.status(200).json({ assetMap: assetKeys });
        } catch (error) {
            next(error);
        }
    }
}