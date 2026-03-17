import { PowersRepository } from "../repositories/powers.repo.js";

export class PowersController {
    static async get(req, res) {
        try {
            const powers = await PowersRepository.read();
            const { name } = req.params;

            if (name) {
                const power = powers.find(p => p.name === name);
                return power ? res.json(power) : res.status(404).json(null);
            }
            res.json(powers);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async post(req, res) {
        try {
            const powers = await PowersRepository.read();
            const newPower = req.body;

            if (powers.some(p => p.name === newPower.name)) {
                return res.status(400).json({ error: `Power ${newPower.name} already exists.` });
            }

            const recordToSave = { ...newPower, oldName: newPower.name };

            powers.push(recordToSave);
            await PowersRepository.write(powers);

            res.json({ message: `Record ${newPower.name} created successfully` });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async put(req, res) {
        try {
            let powers = await PowersRepository.read();
            const updatedPower = req.body;
            const { oldName, name } = updatedPower;

            const index = powers.findIndex(p => p.name === oldName);
            if (index === -1) {
                return res.status(400).json({ error: `Power ${oldName} doesn't exist.` });
            }

            if (name !== oldName && powers.some(p => p.name === name)) {
                return res.status(400).json({ error: `Power ${name} already exists.` });
            }

            powers[index] = updatedPower;
            await PowersRepository.write(powers);

            res.json({ message: `Record ${name} updated successfully` });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async delete(req, res) {
        try {
            let powers = await PowersRepository.read();
            const { name } = req.params;

            const originalLength = powers.length;
            powers = powers.filter(p => p.name !== name);

            if (powers.length === originalLength) {
                return res.status(404).json({ error: `Unable to find power ${name} to delete it.` });
            }

            await PowersRepository.write(powers);
            res.json({ message: `Record ${name} deleted successfully` });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}