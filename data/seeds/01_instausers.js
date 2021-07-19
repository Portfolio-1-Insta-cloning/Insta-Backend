//Pre-hashed password for "abc123"
const hashedPassword = "$2a$12$gidvflLXiaXpoNrYsLGFe.f2vwJPIERvmb8LP0FgYzeyjeQMpK0Va";

exports.seed = async function(knex) {
  await knex("instausers").insert([
    { firstname: "Victor", lastname: "gates", username: "vicky", password: hashedPassword, role_id: 1},
    { firstname: "jhonson", lastname: "jobs", username: "john", password: hashedPassword, role_id: 2},
    
  ])
};



