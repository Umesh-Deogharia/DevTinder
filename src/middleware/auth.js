const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
    //Read the token from the req.cookie
    try {
        const { token } = req.cookies;
        if (!token) {
            throw new Error("Invalid Token !!!!!!!!!!!!")
        }
        //validate the token 
        const decodedToken = await jwt.verify(token, "devtinder@@$003399")
        const { _id } = decodedToken;
        // find the user
        const user = await User.findById(_id);
        if (!user) {
            throw new Error("User not found")
        }
        // console.log("auth ====> "+user);
        req.user = user;
        next()
    }
    catch (err) {
        res.status(400).send("Error" + err);
    }
    // res.send(user)
}

module.exports = { userAuth };