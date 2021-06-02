const db = require("../../data/dbConfig");

function addUser(user) {
    return db("instausers").insert(user)
        .returning("*");
}

function getUsers() {
    return db("instausers")
        .select("instausers.id", "instausers.username as User", "instausers.firstname as firstname", "instausers.lastname as lastname")
}

function findUserById(id) {
    return db("instausers")
        .where("instausers.id", id)
        .first("instausers.id", "instausers.username", "instausers.firstname", "instausers.lastname")
}

function findByUsername(username) {
    return db("instausers")
        .where("instausers.username", username)
        .select("instausers.id", "instausers.username", "instausers.password", "instausers.firstname as firstname", "instausers.lastname as lastname" )
}

module.exports = {
    addUser,
    getUsers,
    findUserById,
    findByUsername
}