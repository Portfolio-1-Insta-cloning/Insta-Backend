const jwt = require("jsonwebtoken");

function restricted() {
    return async (req, res, next) => {
        const authError = {
            message: "Invalid credentials"
        }
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res.status(401).json(authError)
            }

            jwt.verify(token, process.env.jWT_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).json(authError)
                }
                req.token = decoded;
                next();
            })
        } catch (err) {
            next(err);
        }
    }
}

function adminAuth() {
    return( req, res, next) => {
        if(req.token.role_id !== 1) {
            res.status(401).json({
                message: "You are not authorized to access"
            })
        }

        next();
    }
}

module.exports = {restricted, adminAuth}