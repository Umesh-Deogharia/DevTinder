const express = require('express');
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('../models/user');

authRouter.post("/signup", async (req, res) => {

    // const user = new User(req.body);
    // const isGender = new User(req.body.gender);

    try {
        // const isGender = ["male", "female", "others"];
        // const isgenderAllowed = Object.keys((k) => isGender.includes(k));
        // if (isGender) {
        //     await user.save();
        //     res.send(user)
        // }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({ ...req.body, password: hashedPassword });
        console.log(user);
        await user.save();
        res.send(user);
        // const users =await User.find({ emailId: userEmail });
        // res.send(users);
        // if (users.length===0) {
        //     res.send('User Not Found');
        // } else {

        //     // await users.save();
        // }
    } catch (err) {
        console.log('error ' + err)
        res.status(404).send(err.message);
    }

})


authRouter.post("/login", async (req, res) => {
    try {
        const { emailId, password, id } = req.body;
        const user = await User.findOne({ emailId: emailId });
        // const user = await User.findById(id);
        // console.log("emailId", user.emailId);
        // console.log("password",user.password);
        if (!user) {
            throw new Error("Invalid Credential");
        }
        console.log("user", user);
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("isPasswordValid", isPasswordValid);
        if (!isPasswordValid) {
            throw new Error("Invalid Credential");
        } else {

            const token = await jwt.sign({ _id: user._id }, "devtinder@@$003399", { expiresIn: "1d" });
            res.cookie("token", token);
            res.send("login successful");
        }
    } catch (err) {
        res.status(400).send("Error" + err);
    }
})

authRouter.post('/logout', (req, res) => {
    res.cookie('token', null, { expires: new Date(Date.now()) });
    res.send('logout Successfull!!!');
})

module.exports = authRouter;