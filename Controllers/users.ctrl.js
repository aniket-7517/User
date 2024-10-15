const usersSrv = require("../Services/users.srv");

const bcrypt = require('bcryptjs');

const usersCtrl = {

    register : async (req, res) => {
        try {

            const userInfo = await usersSrv.getByEmail(req.body.email);

            if(userInfo) {
                res.send('user already exist');
            }
            else {
                const hashedPassword = await bcrypt.hash(req.body.password, 5);
                req.body.password = hashedPassword;
                const users = await usersSrv.addUser(req.body)
                res.send({ data : users });
            }

        } catch(error) {
            console.log(error);
            res.send(error);
        }
    },

    login : async (req, res) => {

        try {

            const userInfo = await usersSrv.getByEmail(req.body.email);

            if(userInfo) {
                const isPasswordMatched = await bcrypt.compare(req.body.password, userInfo.password);
                if(isPasswordMatched) {
                    res.send({ data : userInfo })
                } else {
                    res.send('Incorrect Password');
                }
            } else {
                res.send('Incorrect Email');
            }

        } catch(error) {
            console.log(error);
            res.send(error);
        }

    }

}

module.exports = usersCtrl;