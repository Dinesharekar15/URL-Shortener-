const express=require('express');
const {generatenewurl,funredirecturl}=require('./controller')
const router=express.Router();

router.post('/',generatenewurl)

router.get('/:shorturlid',funredirecturl)

module.exports=router;