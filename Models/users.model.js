const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    fName : {
        type : 'String'
    },
    lName : {
        type : 'String'
    },
    email : {
        type : 'String'
    },
    mobile : {
        type : 'String'
    },
    password : {
        type : 'String'
    },
    passwordCreatedAt : {
        type : 'String',
        default : new Date().toISOString()
    },
    previousPassword : []

});

const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;