const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("./model");
const {restricted} = require("./middleware")

const router = express.Router();

router.get("/", restricted(), async (req, res, next) => {
    try {
        res.json(await Users.getUsers());
    } catch (err) {
        next(err);
    }
})

router.post("/signup", async (req, res, next) => {
    console.log("Request", req.body);
    try {
        const { username, password } = req.body;

        const [user] = await Users.findByUsername(username);
        console.log("Newuser", user);

        // Verify username is unique
        if (user) {
            return res.status(409).json({
                message: "Username is already taken"
            })
        }

        // validating password field
        if (password == null) {
            res.status(400).json({
                message: "Password is mandatory to register"
            })
        }

        const newUser = await user.addUser({
            username,
            password: await bcrypt.hash(password, 8)
        })
        res.status(201).json(newUser)

    } catch (err) {
        next(err);
    }
})

router.post("/login", async (req, res, next) => {
    console.log("login", req.body);
    try {
        const { username, password } = req.body;
        const user = await Users.findByUsername(username).first()

        if (!user) {
            return res.status(401).json({
                message: "Invalid User"
            })
        }

        console.log("password", user);
        const passwordValid = await bcrypt.compare(password, user.password)

        if (!passwordValid) {
            return res.status(401).json({
                message: "Invalid password"
            })
        }

        const token = jwt.sign({
            userId: user.id,
            username: username
        }, process.env.JWT_SECRET)
        res.cookie("token", token);
        res.json({
            message: `Welcome, ${user.username}`,
            token: token,
        })
        
    } catch (err) {
        next(err);
    }
})

module.exports = router;