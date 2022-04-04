const model = require("../../models/knex");
const bcrypt = require('bcrypt');



module.exports.compareUserInfo = async (userName, password) => {
    try {
        // tìm user có user name trong data base
        const result = await model.knexObj('user').where({
            name: userName,
        });
        if (result.length > 0) {
            // sử dụng bcrypt để compare password
            const comparePassword = await bcrypt.compare(password, result[0].password);
            if (comparePassword) {
                return result;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}