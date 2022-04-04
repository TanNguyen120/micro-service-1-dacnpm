const model = require("../../models/knex");


module.exports.compareUserInfo = async (userName, password) => {
    try {
        // tìm user có user name trong data base
        const result = await model.knexObj('user').where({
            username: userName,
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
        console.err(error);
        throw error;
    }
}