const express = require('express');
const router = express.Router();
const controller = require("./singUpController");

router.get('/', (req, res) => {
    res.json({ message: 'hello' }
    );
})

router.post('/', controller.saveUserInfo);

module.exports = router;