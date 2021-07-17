exports.seed = async function (knex) {
  await knex("instausers").del();
  await knex("roles").del();
  await knex("courses").del();
  await knex("title_description").del();
  await knex("course_details").del();
};