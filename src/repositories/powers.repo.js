import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dir = path.dirname(fileURLToPath(import.meta.url));

export class PowersRepository {
    static async read() {
        const filePath = path.join(__dir, '../assets/powers.json');
        try {

            const data = await fs.readFile(filePath, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            console.error(`Repo Error: Unable to read ${'src/assets/powers.json'}`);
            throw err;
        }
    }

    static async write(powers) {
        powers.sort((a, b) => a.name.localeCompare(b.name));
        await fs.writeFile('src/assets/powers.json', JSON.stringify(powers, null, 4));
    }
}