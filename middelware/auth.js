const {getuser}=require('../service/auth')


function restrictuserlogin(req,res,next){
    const sessionId=req.cookies.uid
    if(!sessionId){
        return res.redirect("/login")
    }


    const user=getuser(sessionId)
    if(!user){
        return res.redirect("/login")
    }
    

    req.user=user
    next()
}
function cheakauth(req,res,next){
    const userId=req.cookies.uid
    

    const user=getuser(userId)
    
    
    req.user=user
    next()
}

module.exports={
    restrictuserlogin,
    cheakauth
}