import fs from 'fs/promises';

export class PowersRepository {
    static async read() {
        try {
            const data = await fs.readFile('src/assets/powers.json', 'utf8');
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