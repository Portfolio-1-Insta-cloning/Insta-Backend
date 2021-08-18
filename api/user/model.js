const db = require("../../data/dbConfig");

function addUser(user) {
    return db("instausers").insert(user)
        .returning("*");
}

function getUsers() {
    return db("instausers")
        .select("instausers.id", "instausers.username as User", "instausers.firstname as firstname", "instausers.lastname as lastname", "instausers.role_id")
}

function findUserById(id) {
    return db("instausers")
        .where("instausers.id", id)
        .select("instausers.id", "instausers.username", "instausers.firstname", "instausers.lastname", "instausers.role_id")
}

function findByUsername(username) {
    return db("instausers")
        .where("instausers.username", username)
        .select("instausers.id", "instausers.username", "instausers.password", "instausers.firstname as firstname", "instausers.lastname as lastname", "instausers.role_id" )
}

function editUserProfile(change, id) {
    return db("instausers")
        .where("id", id)
        .update(change)
}

function removeUser(id) {
    return db("instausers")
        .where("id", id)
        .del()
}

module.exports = {
    addUser,
    getUsers,
    findUserById,
    findByUsername,
    editUserProfile,
    removeUser
}