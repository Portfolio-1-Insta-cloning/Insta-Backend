const db = require("../../data/dbConfig");

function addUser(user) {
    return db("users").insert(user)
        .returning("*");
}

function getUsers() {
    return db("users")
        .select("users.id", "users.username as User")
}

function findUserById(id) {
    return db("users")
        .where("users.id", id)
        .first("users.id", "users.username as User")
}

function findByUsername(username) {
    return db("users")
        .where("users.username", username)
        .select("users.id", "users.username", "users.password" )
}

module.exports = {
    addUser,
    getUsers,
    findUserById,
    findByUsername
}