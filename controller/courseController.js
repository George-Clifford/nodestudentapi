const db = require('../Model/dbConnect')
const courses = db.courses
const { where } = require("sequelize");

module.exports = {
    addCourse : async(req, res, next)=> {
        try{
            let info = {
                //course_id: req.body.course_id,
                course_name: req.body.course_name, 
            };
            const addCourse = await courses.create(info);
        

        res.status(200).send("addCourseMethod");
    }catch (error) {
        console.log(error);
        next(error);
    }
},
    getAllCourses:(req,res,next)=>{
        try{
            let Course = courses.findAll({})
            res.status(200).send(Course)
        }
        catch (error)
        {
            next(error)
        }
},

}

