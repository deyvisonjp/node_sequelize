const express = require('express');

const router = express.Router();

const UserController = require('./controllers/UserController');

router.get('/', (req, res) => {
    return res.send('E lá vamos nós!')
});

router.get('/users', UserController.index);



module.exports = router;
