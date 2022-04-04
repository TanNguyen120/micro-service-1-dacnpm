const model = require("../../models/knex");


// hàm tạo mới user trong bảng user
// lưu ý hàm này chỉ lưu những thông tin như username, password, email, phone, address, không lưu ảnh avatar
exports.getUser = async (userName, password, email, phone, address) => {
    try {
        const result = await model.knexObj('user').insert({
            name: userName,
            password: password,
            email: email,
            phone: phone,
            address: address
        });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
