const express = require('express');
const router = express.Router();
const {usersignup}=require('../controllers/user.js')

router.post("/",usersignup)

module.exports = router;

