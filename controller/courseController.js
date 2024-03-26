const db = require('../Model/dbConnect');
const courses = db.courses;

module.exports = {
    addCourse: async (req, res, next) => {
        try {
            let info = {
                course_name: req.body.course_name,
            };
            const addedCourse = await courses.create(info);
            res.status(200).json(addedCourse);
        } catch (error) {
            console.log(error);
            next(error);
        }
    },
    getAllCourses: async (req, res, next) => {
        try {
            let allCourses = await courses.findAll({});
            res.status(200).json(allCourses);
        } catch (error) {
            next(error);
        }
    }
};
