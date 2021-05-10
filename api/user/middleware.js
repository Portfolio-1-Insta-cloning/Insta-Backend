const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    const authError = {
        message: "Invalid credentials"
    }

    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json(authError)
        }

        jwt.verify(token, process.env.jWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json(authError)
            }
            req.token = decoded;
        })
    } catch (err) {
        next(err);
    }
}