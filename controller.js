const shortid=require('shortid')

async function generatenewurl(req,res){
    const body=req.body;
    if(!body.url)return res.status(400).json({error:'url is require'})
    const shortid=shortid();
    
    await URL.create({
        shorturlid:shortid,
        redirecturl:body.url,
        visithistory:[]
    })
    return res.json({id:shortid})
}

module.exports={
    generatenewurl,
}