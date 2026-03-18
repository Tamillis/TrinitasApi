import jwt from 'jsonwebtoken';
import user from '../contracts/user.contract.js';

export class AuthController {
    static login(req, res) {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        if (username === process.env.USER && password === process.env.PASSWORD) {
            
            console.log("User " + username + " logged in.")

            const token = jwt.sign(
                user(username, 'admin'),
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            return res.json({
                message: 'Login successful',
                token: token // The client must save this (localStorage or a variable)
            });
        }

        res.status(401).json({ error: 'Invalid username or password' });
    }
}