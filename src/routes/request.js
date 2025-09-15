const express = require('express');
const { userAuth } = require('../middleware/auth');
const requestRouter = express.Router();


requestRouter.post("/sendConnectRequest", userAuth, async (req, res) => {
    const user = req.user;
    res.send(user.firstName + " send the connection request")
})

module.exports = requestRouter;