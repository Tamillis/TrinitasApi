import fs from 'fs';
import path from 'path';

const ROOT_ASSETS_PATH = path.resolve(process.cwd(), './src/assets');

const buildAssetMap = (rootDir, dir, baseMap = {}) => {
    if (!dir) dir = rootDir;

    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            buildAssetMap(rootDir, fullPath, baseMap);
        } else if (file.endsWith('.json')) {
            const relativePath = path.relative(rootDir, fullPath);
            const docId = relativePath.replace(/\\/g, '/').replace('.json', '');
            baseMap[docId] = fullPath;
        }
    }
    return baseMap;
};

const allowedAssetMap = buildAssetMap(ROOT_ASSETS_PATH);

export const assetRepository = {
    async get(asset) {
        console.log("serving asset " + asset);
        const filePath = path.join(ROOT_ASSETS_PATH, asset + ".json");

        try {
            const data = await fs.promises.readFile(filePath);
            return JSON.parse(data);
        } catch (err) {
            console.error(`Repo Error: Unable to read ${filePath}`);
            throw err;
        }
    },

    /**
     * Gets the absolute path for an asset if it exists in the allowed map
     * @param {string} docId 
     * @returns {string|null}
     */
    getAssetPath(assetKey) {
        return allowedAssetMap[assetKey] || null;
    },

    /**
     * Returns the root documentation path (useful for path validation)
     */
    getRootDir() {
        return ROOT_ASSETS_PATH;
    },

    /**
     * Overwrites a document safely with new content
     */
    async updateFile(filePath, content) {
        await fs.promises.writeFile(filePath, content, 'utf8');
        return true;
    },

    /**
     * Returns an array of all available assets
     * @returns {string[]}
     */
    getAssetMap() {
        return Object.keys(allowedAssetMap);
    }
};