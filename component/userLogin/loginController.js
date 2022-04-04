const logInService = require('./loginService');
const bcrypt = require('bcrypt');

exports.login = async (req, res, next) => {
    try {
        const userName = req.body.userName;
        const password = req.body.password;
        const result = await logInService.compareUserInfo(userName, password);
        if (result) {
            res.status(200).json({
                message: "login success"
            });
        } else {
            res.status(500).json({
                message: "login fail"
            });
        }
    } catch (error) {
        console.err(error);
        throw error;
    }
}