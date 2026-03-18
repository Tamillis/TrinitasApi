import jwt from 'jsonwebtoken';
import user from '../contracts/user.contract.js';

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