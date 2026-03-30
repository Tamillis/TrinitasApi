export const log = (req, res, next) => {
    console.log(req.path);
    if(req.user) {
        const user = req.user.username;
        console.log(`[${new Date().toISOString()}] ${user} accessed ${req.method} ${req.originalUrl}`);
    }
    else {
        console.log("Anon at: " + req.path)
    }
    next(); 
};