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
})

module.exports = server;