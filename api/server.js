const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const userRouter = require("./user/router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/", async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Welcome to our friends group"
        })
    } catch (err) {
        next(err);
    }
});

server.use("/api/users", userRouter);

server.use((err, req, res, next) => {
    console.log(err);
    try {
        res.status(500).json({
            message: "something went wrong"
        })
    } catch (err) {
        next(err);
    }
})

module.exports = server;