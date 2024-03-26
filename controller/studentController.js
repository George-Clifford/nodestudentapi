const db = require('../Model/dbConnect');
const student = db.student;

module.exports = {
    addStudent: async (req, res, next) => {
        try {
            let info = {
                student_id: req.body.student_id,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                gender: req.body.gender,
            };
            const addedStudent = await student.create(info);
            res.status(200).json(addedStudent);
        } catch (error) {
            console.log(error);
            next(error);
        }
    },
    getAllStudents: async (req, res, next) => {
        try {
            let students = await student.findAll({});
            res.status(200).json(students);
        } catch (error) {
            next(error);
        }
    },
    getStudent: async (req, res, next) => {
        try {
            let id = req.params.student_id;
            let studentFound = await student.findOne({ where: { student_id: id } });
            if (!studentFound) {
                throw createError(404, "Student does not exist");
            }
            res.status(200).json(studentFound);
        } catch (error) {
            next(error);
        }
    },
    updateStudent: async (req, res, next) => {
        try {
            let id = req.params.id;
            const updatedStudent = await student.update(req.body, { where: { student_id: id } });
            if (updatedStudent[0] === 0) {
                throw createError(404, "Student does not exist");
            }
            res.status(200).json(updatedStudent);
        } catch (error) {
            next(error);
        }
    }
};

