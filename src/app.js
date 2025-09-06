const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');

const app = express();

app.use(express.json());

app.get("/user", async (req, res) => {

    const userEmail = req.body.emailId;
    try {
        console.log(userEmail);
        const users =await User.findOne({ emailId: userEmail });
        // const users =await User.find({ emailId: userEmail });
        if (users.length===0) {
            res.send('User Not Found');
        } else {
            
            res.send(users);
            // await users.save();
        }
    } catch (err) {
        res.status(404).send('Something Went Wrong',err);
    }
    
})



connectDB().then(() => {
    console.log('Database Connection Established');
    app.listen(7777, () => {
        console.log('Server is running Successfully');
    });
}).catch((err) => {
    console.log('Database not connected', err);
});
