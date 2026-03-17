import jwt from 'jsonwebtoken';
import user from '../contracts/user.contract.js';

export class AuthController {
    static login(req, res) {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        if (username === process.env.USER && password === process.env.PASSWORD) {
            const token = jwt.sign(
                user(username, 'admin'),
                process.env.JWT_SECRET,
                { expiresIn: '8h' }
            );

            return res.json({
                message: 'Login successful',
                token: token // The client must save this (localStorage or a variable)
            });
        }

        res.status(401).json({ error: 'Invalid username or password' });
    }

    static logout(req, res) {
        // req.session.destroy(); // if using express-session
        res.json({ message: 'Logout successful' });
    }

    static check(req, res) {
        const authenticated = !!(req.session?.authenticated);
        const username = req.session?.user || null;
        const statusCode = authenticated ? 200 : 401;

        res.status(statusCode).json({ authenticated, username });
    }
}