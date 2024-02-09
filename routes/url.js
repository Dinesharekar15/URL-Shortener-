const express=require('express');
const {generatenewurl,funredirecturl,analitics}=require('../controllers/url.js')

const router = express.Router();



router.post('/',generatenewurl)



router.get('/:shorturlid',funredirecturl)

router.get('/analitics/:shorturlid',analitics)



module.exports = router;
