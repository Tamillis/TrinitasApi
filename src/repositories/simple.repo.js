import fs from 'fs/promises';

export class SimpleRepository {
    static async get(asset) {
        let filePath = `src/assets/${asset}.json`
        try {
            const data = await fs.readFile(filePath, 'utf-8');
            return JSON.parse(data);
        } catch (err) {
            console.error(`Simple Repo Error: Unable to read ${filePath}`);
            throw err;
        }
    }
}