const shortid = require('shortid')
const URL = require('../models/url.js')

async function generatenewurl(req, res) {
    const body = req.body;
    if (!body || !body.url) {
        return res.status(400).json({ error: 'url is required' });
    }
    const newShortId = shortid();

    await URL.create({
        shorturlid: newShortId,
        redirecturl: body.url,
        visithistory: []
    })

    
    const allurl=await URL.find({});
     
    // return res.json({ id: newShortId });
    return res.render("home",{ id: newShortId, urls:allurl})
    
}
async function funredirecturl(req, res) {
    const shorturlid = req.params.shorturlid;
    
    try {
        const entry = await URL.findOneAndUpdate(
            { shorturlid },
            {
                $push: {
                    visithistory: {
                        timestamp: Date.now()
                    }
                }
            }
        );
        


        if (entry && entry.redirecturl) {
            console.log(entry.redirecturl);
            return res.redirect(entry.redirecturl);

        } else {
            return res.status(404).json({ error: "Short URL not found" });
        }
    } catch (error) {
        // Handle other errors, e.g., database connection issues
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}


async function analitics(req, res) {
    const shorturlid = req.params.shorturlid;
    const result = await URL.findOne({ shorturlid })
    return res.json({
        clicks: result.visithistory.length,
        Analitics: result.visithistory
    })
}





module.exports = {
    generatenewurl,
    funredirecturl,
    analitics,
    
}