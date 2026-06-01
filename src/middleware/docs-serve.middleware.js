import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dir = path.dirname(fileURLToPath(import.meta.url));

const staticOptions = {
    dotfiles: 'ignore',
    etag: false,
    index: false,
    lastModified: false,
    setHeaders: (res) => {
        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');
    }
};

export const docRules = express.static(path.join(__dir, "../assets/docs"), staticOptions);