const db = require("../../data/dbConfig");

function getCourses() {
    return db("courses")
    .select("courses.id", "courses.course_name")
}

function getCourseDetails(id) {
    return db("course_details")
    .where("course_id", id)
    .innerJoin("courses", "course_id", "courses.id")
    .innerJoin("title_description", "title_description_id", "title_description.id")
    .select("courses.course_name", "title_description.title", "title_description.description")
}

module.exports = {
    getCourseDetails,
    getCourses,
}