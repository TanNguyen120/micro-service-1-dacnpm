const bcrypt = require('bcrypt');
const singUpService = require('./singUpService.js');


// hàm dùng để mã hoá password và gọi service để tạo record trong data base
// vì đây là demo nên không có phần validate dữ liệu đầu vào 
exports.saveUserInfo = async (req, res, next) => {
    try {
        const userName = req.body.userName;
        const password = bcrypt.hashSync(req.body.password, '120');
        const email = req.body.email;
        const phone = req.body.phone;
        const address = req.body.address;
        const result = await singUpService.getUser(userName, password, email, phone, address);
        if (result) {
            res.status(200).json({
                message: "register success "
            });
        } else {
            res.status(500).json({
                message: "register fail"
            });
        }
    } catch (error) {
        console.err(error);
        throw error;
    }
}

