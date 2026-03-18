export const log = (req, res, next) => {
    console.log(req.user);
    const user = req.user.username;
    console.log(`[${new Date().toISOString()}] ${user} accessed ${req.method} ${req.originalUrl}`);
    next(); 
};