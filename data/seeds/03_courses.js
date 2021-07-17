exports.seed = async function(knex) {
  await knex("courses").insert([
    { id: 1, course_name: "Scratch" },
    { id: 2, course_name: "App Inventor" },
    { id: 3, course_name: "Python" },
    { id: 4, course_name: "TINKERCAD" },
 ])
};
