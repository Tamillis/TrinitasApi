import fs from 'fs';
import path from 'path';

const ROOT_DOCS_PATH = path.resolve(process.cwd(), './src/docs');

const buildDocsMap = (rootDir, dir, baseMap = {}) => {
    if (!dir) dir = rootDir;

    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            buildDocsMap(rootDir, fullPath, baseMap);
        } else if (file.endsWith('.md')) {
            const relativePath = path.relative(rootDir, fullPath);
            const docId = relativePath.replace(/\\/g, '/').replace('.md', '');
            baseMap[docId] = fullPath;
        }
    }
    return baseMap;
};

// Build the internal cache immediately upon module import
const allowedDocsMap = buildDocsMap(ROOT_DOCS_PATH);

export const docsRepository = {
    /**
     * Gets the absolute path for a docId if it exists in the allowed map
     * @param {string} docId 
     * @returns {string|null}
     */
    getFilePathById(docId) {
        return allowedDocsMap[docId] || null;
    },

    /**
     * Returns the root documentation path (useful for path validation)
     */
    getRootDir() {
        return ROOT_DOCS_PATH;
    },

    /**
     * Overwrites a document safely with new content
     */
    async updateFile(filePath, content) {
        await fs.promises.writeFile(filePath, content, 'utf8');
        return true;
    },

    /**
     * Returns an array of all available document IDs
     * @returns {string[]}
     */
    getAllDocIds() {
        return Object.keys(allowedDocsMap);
    }
};