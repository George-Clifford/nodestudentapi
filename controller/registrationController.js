const db = require('../Model/dbConnect')
const registration = db.registration

module.exports = {
    addRegistration : async(req, res, next)=> {
        try{
            let info = {
                username: req.body.username,
                password: req.body.password, 
            };
            const addRegistration = await registration.create(info);
        

        res.status(200).send("addRegistrationMethod");
    }catch (error) {
        console.log(error);
        next(error);
    }
},
    getAllRegistrations:(req,res,next)=>{
        try{
            let registration = registration.findAll({})
            res.status(200).send(registration)
        }
        catch (error)
        {
            next(error)
        }
},
}