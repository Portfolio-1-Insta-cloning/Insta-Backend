const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("./model");
const {restricted} = require("./middleware")

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        res.json(await Users.getUsers());
    } catch (err) {
        next(err);
    }
})

router.post("/signup", async (req, res, next) => {
    console.log("Request", req.body);
    try {
        const { username, password, firstname, lastname } = req.body;

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

        const newUser = await Users.addUser({
            firstname,
            lastname,
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
                message: "Invalid Username"
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
            firstname: `${user.firstname}`,
            lastname:  `${user.lastname}`,
            username: `${user.username}`,
            token: token,
        })
        
    } catch (err) {
        next(err);
    }
})

router.get("/:id", restricted(), async (req, res, next) => {
    console.log("user by id", res.body)
    try {
        const user = await Users.findUserById(req.params.id)
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            })
        }
        res.json({
            firstname: `${user.firstname}`
        });
        console.log('User by id', user)
    } catch (err) {
        next(err)
    }
})

module.exports = router;