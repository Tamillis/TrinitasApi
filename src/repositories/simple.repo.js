import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dir = path.dirname(fileURLToPath(import.meta.url));
        

export class SimpleRepository {
    static async get(asset) {
        const filePath = path.join(__dir, `../assets/${asset}.json`);
        try {
            const data = await fs.readFile(filePath, 'utf-8');
            return JSON.parse(data);
        } catch (err) {
            console.error(`Simple Repo Error: Unable to read ${filePath}`);
            throw err;
        }
    }
}