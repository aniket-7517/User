const usersModel = require("../Models/users.model");

const usersSrv = {

    getByEmail : (email) => {
        return usersModel.findOne({email});
    },

    addUser : (data) => {
        const users = new usersModel(data);
        return users.save()
    }

}

module.exports = usersSrv;