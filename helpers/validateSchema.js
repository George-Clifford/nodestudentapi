const Joi = require('joi');

const authSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string ().min(6).required(),
})

const vendorValidate = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required() ,
    gender: Joi.string().required(),
})
module.exports = {
    authSchema,
    vendorValidate
}