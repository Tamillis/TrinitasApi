/**
 * Middleware to restrict access by role
 * @param {string} requiredRole 
 */
export const checkRole = (requiredRole) => {
    return (req, res, next) => {
        if (!req.user || req.user.role !== requiredRole) {
            return res.status(403).json({ 
                error: "Insufficient permissions. Admin access required." 
            });
        }
        next();
    };
};