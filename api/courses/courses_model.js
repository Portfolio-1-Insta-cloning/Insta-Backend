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

function addCourse(course) {
    return db("courses").insert(course)
    .returning("*")
}

function addCourseDetails(details) {
    return db("course_details").insert(details)
    .returning("*")
}

function removeCourse(id) {
    return db("courses")
        .where("id", id)
        .del()
}

function removeCoureDetails(id) {
    return db("course_details")
    .where("id", id)
    .del()
}

module.exports = {
    getCourseDetails,
    getCourses,
    addCourse,
    addCourseDetails,
    removeCourse,
    removeCoureDetails,
}