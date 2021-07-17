exports.seed = async function(knex) {
  await knex("course_details").insert([
   // Scratch
   { id: 1, course_id: 1, title_description_id: 1 },
   { id: 2, course_id: 1, title_description_id: 2 },
   { id: 3, course_id: 1, title_description_id: 3 },
   { id: 4, course_id: 1, title_description_id: 4 },
   { id: 5, course_id: 1, title_description_id: 5},
   // App Inventor
   { id: 6, course_id: 2, title_description_id: 6 },
   { id: 7, course_id: 2, title_description_id: 7 },
   { id: 8, course_id: 2, title_description_id: 8 },
   { id: 9, course_id: 2, title_description_id: 9 },
   { id: 10, course_id: 2, title_description_id: 10 },
   { id: 11, course_id: 2, title_description_id: 11 },
   // Python
   { id: 12, course_id: 3, title_description_id: 12 },
   { id: 13, course_id: 3, title_description_id: 13 },
   { id: 14, course_id: 3, title_description_id: 14 },
   { id: 15, course_id: 3, title_description_id: 15 },
   { id: 16, course_id: 3, title_description_id: 16 },
   { id: 17, course_id: 3, title_description_id: 17 },
   { id: 18, course_id: 3, title_description_id: 18 },
   { id: 19, course_id: 3, title_description_id: 19 },
   { id: 20, course_id: 3, title_description_id: 20 },
   { id: 21, course_id: 3, title_description_id: 21 },
   { id: 22, course_id: 3, title_description_id: 22 },
   { id: 23, course_id: 3, title_description_id: 23 },
   { id: 24, course_id: 3, title_description_id: 24 },
   { id: 25, course_id: 3, title_description_id: 25 },
   { id: 26, course_id: 3, title_description_id: 26 },
   { id: 27, course_id: 3, title_description_id: 27 },
   // TinkerCAD
   { id: 28, course_id: 4, title_description_id: 28 },
   { id: 29, course_id: 4, title_description_id: 29 },
   { id: 30, course_id: 4, title_description_id: 30 },
   { id: 31, course_id: 4, title_description_id: 31 },
   { id: 32, course_id: 4, title_description_id: 32 },
 ])
};