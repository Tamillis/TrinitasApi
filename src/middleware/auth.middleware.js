import jwt from 'jsonwebtoken';
import user from '../contracts/user.contract.js';
import path from 'path';
import { docsRepository } from '../repositories/docs.repo.js';

/** @typedef {import('../contracts/user.contract.js').UserContract} UserContract */

const getToken = (req) => req.headers.authorization?.split(' ')[1];

export const authorise = (req, res, next) => {
    const token = getToken(req);

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid or expired token.' });
    }
};

/** Identify the user, defaulting to user("anon", "guest"). Always continues. */
export const identify = (req, res, next) => {
    const token = getToken(req);

    if (!token) {
        req.user = user("anon", "guest");
    }
    else {
        try {
            /** @type {UserContract} */
            const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
            req.user = verifiedUser;
        } catch (err) {
            req.user = user("anon", "guest");
        }
    }

    next();
}

export const validateDocPath = (req, res, next) => {
    
    const { docId } = req.body;

    if (!docId) {
        return res.status(400).json({ error: 'Parameter docId is required.' });
    }

    // Strict Validation, filepath exists or not
    const targetFilePath = docsRepository.getFilePathById(docId);
    
    if (!targetFilePath) {
        return res.status(403).send('Access Denied.')
    }
    
    console.log("targetFilePath", targetFilePath);

    // Double-check file safety to prevent any path escaping
    const rootDir = docsRepository.getRootDir();
    const resolvedTarget = path.resolve(targetFilePath);
    if (!resolvedTarget.startsWith(rootDir)) {
        return res.status(403).send('Access Denied.')
    }

    req.safeDocPath = resolvedTarget;
    next();
}