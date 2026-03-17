import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POWERS_FILE = path.resolve(__dirname, '../assets/powers.json');

export class PowersRepository {
    static async read() {
        try {
            const data = await fs.readFile(POWERS_FILE, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            throw new Error(`Repo Error: Unable to read ${POWERS_FILE}`);
        }
    }

    static async write(powers) {
        powers.sort((a, b) => a.name.localeCompare(b.name));
        await fs.writeFile(POWERS_FILE, JSON.stringify(powers, null, 4));
    }
}