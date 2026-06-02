import { docsRepository } from '../repositories/docs.repo.js';

export class DocsController {
    static async saveDocument(req, res, next) {
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

    static async getNavigation(req, res, next) {
        try {
            const docIds = docsRepository.getAllDocIds();
            return res.status(200).json({ docs: docIds });
        } catch (error) {
            next(error);
        }
    }
};