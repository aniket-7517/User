const joi = require('joi');

const mongoose = require('mongoose');

const userValidator = async (req, res, next) => {

    try {

        const userSchema = joi.object({
            fName : joi.string().required(),
            lName : joi.string().required(),
            email : joi.string().required(),
            mobile : joi.string().required(),
            password : joi.string().required()
        })
        await userSchema.validateAsync(req.body);
        next();

    } catch(error) {
        const errorMsg = [];

        if(error.details) {
            error.details.forEach(obj => {
                errorMsg.push(obj.message);
            })
            res.send({ errors : errorMsg});
        } else {
            console.log(error);
            res.send(error);
        }
    }

}

module.exports = userValidator;