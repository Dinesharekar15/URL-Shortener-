const express=require('express');
const {generatenewurl,funredirecturl,geturl,analitics}=require('./controller')
const router=express.Router();




router.post('/url',generatenewurl)



router.get('/:shorturlid',funredirecturl)

router.get('/analitics/:shorturlid',analitics)

router.get("/",geturl) 

module.exports=router;