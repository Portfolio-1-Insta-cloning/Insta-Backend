exports.seed = async function(knex) {
  await knex("roles").insert([
    { id: 1, role: "admin" },
    { id: 2, role: "user" },
 ])
};

