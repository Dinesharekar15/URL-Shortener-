const express=require('express');
const {generatenewurl,funredirecturl,geturl,analitics}=require('./controller')
const router=express.Router();
const URL=require('./model');

router.get('/', async (req,res)=>{
    const allurl=await URL.find({});
     return res.render('home',{
        urls:allurl
     })
})

router.post('/url',generatenewurl)


router.get('/:shorturlid',funredirecturl)

router.get('/analitics/:shorturlid',analitics)

router.get("/url/:shorturlid",geturl) 

module.exports=router;