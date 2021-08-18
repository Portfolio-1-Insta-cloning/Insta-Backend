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

router.post("/", async (req, res, next) => {
    try {
        const newOne = req.body;
        const newCourse = await Courses.addCourse(newOne)
        res.status(210).json(newCourse);
    } catch (err) {
        next (err);
    }
})

router.post("/", async (req, res, next) => {
    try {
        const newItem = req.body;
        const newDetails = await Courses.addCourseDetails(newItem)
        res.status(210).json(newDetails);
    } catch (err) {
        next (err);
    }
})

router.delete(":/id", async (req, res, next) => {
    try {
        const {id} = req.params
        const deleteCourse = await Courses.removeCourse(id)
        res.json({removed: deleteCourse})
    } catch (err) {
        next(err);
    }
})

router.delete(":/id", async (req, res, next) => {
    try {
        const {id} = req.params
        const deleteDetails = await Courses.removeCoureDetails(id)
        res.json({removed: deleteDetails})
    } catch (err) {
        next(err);
    }
})

module.exports = router;