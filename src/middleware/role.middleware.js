/**
 * Middleware to restrict access by role
 * @param {string} requiredRole 
 */
export const authorise = (requiredRole) => {
    return (req, res, next) => {
        // req.user is populated by your 'protect' middleware
        if (!req.user || req.user.role !== requiredRole) {
            return res.status(403).json({ 
                error: "Insufficient permissions. Admin access required." 
            });
        }
        next();
    };
};