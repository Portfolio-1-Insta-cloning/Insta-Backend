exports.seed = async function (knex) {
  await knex("instausers").del();
};

