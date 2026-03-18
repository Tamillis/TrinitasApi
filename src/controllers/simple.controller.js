import { SimpleRepository } from '../repositories/simple.repo.js';

export class SimpleController {
    static async get(req, res) {
        const asset = req.originalUrl.split("/")[2];
        
        if (!asset) {
            return res.status(400).json({ error: 'Url couldnt be parsed into asset' });
        }

        try {
            const data = await SimpleRepository.get(asset);
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch assets' });
        }
    }
}