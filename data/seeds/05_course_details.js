exports.seed = async function(knex) {
  await knex("course_details").insert([
   // Scratch
   { course_id: 1, title_description_id: 1 },
   { course_id: 1, title_description_id: 2 },
   { course_id: 1, title_description_id: 3 },
   { course_id: 1, title_description_id: 4 },
   { course_id: 1, title_description_id: 5},
   // App Inventor
   { course_id: 2, title_description_id: 6 },
   { course_id: 2, title_description_id: 7 },
   { course_id: 2, title_description_id: 8 },
   { course_id: 2, title_description_id: 9 },
   { course_id: 2, title_description_id: 10 },
   { course_id: 2, title_description_id: 11 },
   // Python
   { course_id: 3, title_description_id: 12 },
   { course_id: 3, title_description_id: 13 },
   { course_id: 3, title_description_id: 14 },
   { course_id: 3, title_description_id: 15 },
   { course_id: 3, title_description_id: 16 },
   { course_id: 3, title_description_id: 17 },
   { course_id: 3, title_description_id: 18 },
   { course_id: 3, title_description_id: 19 },
   { course_id: 3, title_description_id: 20 },
   { course_id: 3, title_description_id: 21 },
   { course_id: 3, title_description_id: 22 },
   { course_id: 3, title_description_id: 23 },
   { course_id: 3, title_description_id: 24 },
   { course_id: 3, title_description_id: 25 },
   { course_id: 3, title_description_id: 26 },
   { course_id: 3, title_description_id: 27 },
   // TinkerCAD
   { course_id: 4, title_description_id: 28 },
   { course_id: 4, title_description_id: 29 },
   { course_id: 4, title_description_id: 30 },
   { course_id: 4, title_description_id: 31 },
   { course_id: 4, title_description_id: 32 },
 ])
};