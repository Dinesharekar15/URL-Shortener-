const jwt =require("jsonwebtoken")
const secretkey='154808@Dinesh'

function setuser(user){
    return jwt.sign({
        id: user._id,
        email: user.email
    }, secretkey, { algorithm: 'HS256' });
}


function getuser(token){
    if (!token) return null;
    try {
        return jwt.verify(token, secretkey);
    } catch (err) {
        // Handle the error, e.g., log it or return null
        console.error("JWT verification error:", err.message);
        return null;
    }
}


module.exports = {
    setuser,
    getuser
}