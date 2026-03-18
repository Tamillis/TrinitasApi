import express from 'express';

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

export const docRules = express.static("src/assets/docs", staticOptions);