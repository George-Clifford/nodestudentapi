const db = require('../Model/dbConnect')
const createError = require('http-errors')
const { signAccessToken } = require('../helpers/jwthelpers')

const user = db.users

module.exports = {
    addUser : async(req, res, next)=> {
        try{
            const {email ,password}=req.body;
            const exists = await user.findOne({where: {email}})
            if (exists) {
                throw createError.Conflict('${email} has already been registered')
            }
            const newUser = new user({email, password})
            const savedUser = await newUser.save()

            const accessToken = await signAccessToken(savedUser.user_id)
            res.status(200).send({accessToken})
        } catch(error) {
            next(error)
        }
        // try{
        //     let info = {
        //         email: req.body.email,
        //         password: req.body.password, 
        //     };
    //         const addUser = await user.create(info);
        

    //     res.status(200).send("addUserMethod");
    // }catch (error) {
    //     console.log(error);
    //     next(error);
    // }
},
    getAllUsers:(req,res,next)=>{
        try{
            let user = user.findAll({})
            res.status(200).send(user)
        }
        catch (error)
        {
            next(error)
        }
},
}