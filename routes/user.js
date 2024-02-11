const express = require('express');
const router = express.Router();
const {usersignup,userlogin}=require('../controllers/user.js')

router.post("/",usersignup)
router.post("/login",userlogin)

module.exports = router;

