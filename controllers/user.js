
const User=require('../models/user')

async function usersignup(req,res){
    const {username,email,password}=req.body;
    await User.create({
        name:username,
        email:email,
        password:password
    })
     
    return res.redirect("/")
     
}

async function userlogin(req, res){
    const {email,password}=req.body;
   const user= await User.findOne({email,password})
   if(!user)return res.render("login",{error:"Invalid email or password"})
   return res.redirect("/")
}

module.exports={
    usersignup,
    userlogin
};