export const log = (req, res, next) => {
    const user = req.user?.username || 'Anonymous';
    console.log(`[${new Date().toISOString()}] ${user} accessed ${req.method} ${req.originalUrl}`);
    next(); 
};