
const User=require('../models/user')

async function usersignup(req,res){
    const {username,email,password}=req.body;
    await User.create({
        name:username,
        email:email,
        password:password
    })
     
    return res.render("home")
     
}

module.exports={
    usersignup,
};