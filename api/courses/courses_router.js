const express = require("express");
const Courses = require("../courses/courses_model");
const { restricted } = require("../user/middleware");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const courseList = await Courses.getCourses();
        res.json(courseList)
    } catch (err) {
        next(err)
    }
});

router.get("/:id/details", async (req, res, next) => {
    try {
        const courseDetails = await Courses.getCourseDetails(req.params.id)
        res.json(courseDetails)
    } catch (err) {
        next(err)
    }
})

module.exports = router;