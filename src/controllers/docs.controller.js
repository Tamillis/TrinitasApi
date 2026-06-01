import { docsRepository } from '../repositories/docs.repo.js';

export const docsController = {
    async saveDocument(req, res, next) {
        try {
            const { content } = req.body;
            const targetFilePath = req.safeDocPath;

            if (typeof content !== 'string')
                return res.status(400).json({ error: 'Content field is required.' });
            
            await docsRepository.updateFile(targetFilePath, content);

            res.status(200).json({ message: 'File saved successfully.' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};