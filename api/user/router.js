const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("./model");
const {restricted, adminAuth} = require("./middleware")

const router = express.Router();

router.get("/", restricted(), adminAuth(), async (req, res, next) => {
    try {
        console.log("get request", req.token.username)
        res.json(await Users.getUsers());
    } catch (err) {
        next(err);
    }
})

router.post("/signup", async (req, res, next) => {
    console.log("Request", req.body);
    try {
        const { username, password, firstname, lastname, role_id } = req.body;

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
            password: await bcrypt.hash(password, 8),
            role_id,
        })
        res.status(201).json(newUser)
        console.log("New user",newUser)

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
            username: username,
            role_id: user.role_id,
        }, process.env.JWT_SECRET)
        res.cookie("token", token);
        res.json({
            id: `${user.id}`,
            firstname: `${user.firstname}`,
            lastname: `${user.lastname}`,
            username: `${user.username}`,
            token: token,
            role_id: `${user.role_id}`
        })
        
    } catch (err) {
        next(err);
    }
})

router.get("/:id", restricted(), async (req, res, next) => {
    try {
        const [user] = await Users.findUserById(req.params.id)
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            })
        }
        res.json(user);
        console.log('User by id', user)
    } catch (err) {
        next(err)
    }
})

router.put("/:id", restricted(), async (req, res, next) => {
    const id = req.params.id;
    console.log('REQ.PARAMS.ID =', req.params.id);
    const changes = req.body;
    console.log("PUT = ", req.body);
    
    // await Users.findUserById(id)
    //     .then(() => {
    //         if (id) {
    //             const editedUser = Users.editUserProfile(changes, id);
    //             console.log("editedUser", editedUser);
    //             return changes;
    //         } else {
    //             res.status(404).json({ message: "Could not find user with given ID" });
    //         }
    //     })
    //     .then(updateUser => {
    //         res.json(updateUser);
    //     })
    //     .catch(err => {
    //         res.status(500).json({ message: "Failed to update user" });
    //     });

    try {
        const updatedUser = await Users.editUserProfile(changes, id);
        const user = await Users.findUserById(id);
        res.json(user[0]);
    } catch (err) {
        next(err);
    }
});

module.exports = router;