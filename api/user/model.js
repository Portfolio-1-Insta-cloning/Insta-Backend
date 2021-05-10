const db = require("../../data/dbConfig");

async function addUser(user) {
    const [id] = await db("users").insert(user)
    return findUserById(id);
}

function getUsers() {
    return db("users")
        .innerJoin("roles", "users.role_id", "roles.id")
        .select("users.id", "users.username as User", "roles.role as Role")
}

function findUserById(id) {
    return db("users")
        .innerJoin("roles", "users.role_id", "roles.id")
        .where("users.id", id)
        .first("users.id", "users.username as User", "roles.role as Role")
}

function findByUsername(username) {
    return db("users")
        .where("users.username", username)
        .innerJoin("roles", "users.role_id", "roles.id")
        .select("users.id", "users.username", )
}

module.exports = {
    addUser,
    getUsers,
    findUserById,
    findByUsername
}