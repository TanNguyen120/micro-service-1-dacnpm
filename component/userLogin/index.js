const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const logInController = require('./loginController');

router.get('/', (req, res) => {
    res.json({ message: 'hello' }
    );
})

router.post('/', logInController.login);

module.exports = router;