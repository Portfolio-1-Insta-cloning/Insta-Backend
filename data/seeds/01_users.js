//Pre-hashed password for "abc123"
const hashedPassword = "$2a$12$gidvflLXiaXpoNrYsLGFe.f2vwJPIERvmb8LP0FgYzeyjeQMpK0Va";

exports.seed = async function(knex) {
  await knex("users").insert([
    { username: "vicky", password: hashedPassword, role_id: 1},
    { username: "john", password: hashedPassword, role_id: 1},
    { username: "Nelson", password: hashedPassword, role_id: 2},
    { username: "Noah", password: hashedPassword, role_id: 2},
  ])
};
