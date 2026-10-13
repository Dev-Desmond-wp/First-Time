const express = require('express');
const router = express.Router();

const {allUsers, createUser} = require('../controller/user');

router.get('/allusers', allUsers);

router.post('/createuser', createUser);

module.exports = router