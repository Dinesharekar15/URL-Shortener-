const express=require('express');
const {generatenewurl}=require('./controller')
const router=express.Router();

router.post('/',generatenewurl)

module.exports=router;