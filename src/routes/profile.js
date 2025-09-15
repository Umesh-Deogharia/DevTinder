const express = require('express')
const profileRouter = express.Router();
const { userAuth } = require('../middleware/auth');

profileRouter.get("/profile", userAuth, async (req, res) => {
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

module.exports = profileRouter;