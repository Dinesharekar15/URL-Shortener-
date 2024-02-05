const shortid=require('shortid')
const URL=require('./model')

async function generatenewurl(req,res){
    const body=req.body;
    if (!body || !body.url) {
        return res.status(400).json({ error: 'url is required' });
    }
    const newShortId=shortid();
    
    await URL.create({
        shorturlid:newShortId,
        redirecturl:body.url,
        visithistory:[]
    })
    return res.json({id:newShortId})
}
async function funredirecturl(req,res){
    const shorturlid=req.params.shorturlid;
    const entry= await URL.findOneAndUpdate({
        shorturlid
    },{$push:{
        visithistory:{
            timestamp:Date.now()
        }
    }})

    res.redirect(entry.redirecturl)
}



module.exports={
    generatenewurl,
    funredirecturl
}