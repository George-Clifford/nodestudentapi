const express = require("express")
const courseController = require('../controller/courseController')
const { verifyAccessToken } = require('../helpers/jwthelpers');
const router = express.Router();

router.post('/addCourse', courseController.addCourse)
router.get("/getAllCourses", verifyAccessToken, courseController.getAllCourses);

module.exports = router;