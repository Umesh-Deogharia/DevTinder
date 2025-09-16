const express = require('express')
const profileRouter = express.Router();
const { userAuth } = require('../middleware/auth');
const { validateEditProfileData } = require('../utils/validation');

profileRouter.get("/profile/view", userAuth, async (req, res) => {
    try {
        // console.log("profile req ===> ", req)
        const user = req.user
        // console.log("profile ===> " + user);
        res.send(user);
    }
    catch (err) {
        res.status(400).send("Error" + err);
    }

})

profileRouter.patch('/profile/edit',userAuth, async (req, res) => {
    try {
        if (!validateEditProfileData(req)) throw new Error("Invalid Edit Request");
        const loggedInUser = req.user
        // console.log("User =======>>>>>>>>>", user);
        Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
        await loggedInUser.save();
        res.send(`${loggedInUser.firstName} , You have successfully Updated Your Profile`);
    }
    catch (err) {
        res.status(400).send('Error : ' + err.message);
    }
})

module.exports = profileRouter;