//Pre-hashed password for "abc123"
const hashedPassword = "$2a$12$gidvflLXiaXpoNrYsLGFe.f2vwJPIERvmb8LP0FgYzeyjeQMpK0Va";

exports.seed = async function(knex) {
  await knex("instausers").insert([
    { username: "vicky", password: "sword"},
    { username: "john", password: "sword"},
    { username: "Nelson", password: "sword"},
    { username: "Noah", password: "sword"},
  ])
};