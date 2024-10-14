const express = require('express');
const usersCtrl = require('../Controllers/users.ctrl');
const userValidator = require('../Validator/user.validator');

const router = express.Router();

router.post('/register',userValidator, usersCtrl.register);
router.post('/login', usersCtrl.login);

module.exports = router;