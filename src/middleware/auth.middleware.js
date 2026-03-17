import jwt from 'jsonwebtoken';

/** @typedef {import('../contracts/user.contract.js').UserContract} UserContract */

export const protect = (req, res, next) => {
    // Expecting header: Authorization: Bearer <token>
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        /** @type {UserContract} */
        const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verifiedUser;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid or expired token.' });
    }
};