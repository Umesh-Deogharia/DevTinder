const express = require('express');
const connectDB = require('./config/database');
const app = express();
const expressParser = require("cookie-parser");
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const requestRouter = require('./routes/request');

app.use(express.json());
app.use(expressParser());



app.use('/', authRouter);
app.use('/', profileRouter);
app.use('/', requestRouter);




// app.get("/user", async (req, res) => {

//     const userid = req.body.id;

//     try {
//         console.log('userid', userid);
//         const users = await User.findById(userid);
//         res.send(users)
//         console.log(users);
//         // const users =await User.find({ emailId: userEmail });
//         res.send(users);
//         // if (users.length===0) {
//         //     res.send('User Not Found');
//         // } else {

//         //     // await users.save();
//         // }
//     } catch (err) {
//         res.status(404).send('Something Went Wrong', err);
//     }

// })

// app.get("/user", async (req, res) => {

//     const userEmail = req.body.emailId;
//     try {
//         console.log('userid', userEmail);

//         const users = await User.findOne({ emailId: userEmail });
//         // console.log(users);
//         res.send(users)
//         // const users =await User.find({ emailId: userEmail });
//         // res.send(users);
//         // if (users.length===0) {
//         //     res.send('User Not Found');
//         // } else {
//         //     // await users.save();
//         // }
//     } catch (err) {
//         res.status(404).send('Something Went Wrong', err);
//     }

// })

app.get("/feed", async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.send(allUsers);
    } catch (err) {
        res.status(400).send('Something went wrong');
    }

})

app.delete("/delete", async (req, res) => {
    const userid = req.body.id;
    try {

        const newUser = await User.findByIdAndDelete(userid);
        res.send(newUser);
    }
    catch (err) {
        res.status(400).send("Something went Wrong");
    }
})
app.patch("/user", async (req, res) => {
    const userid = req.body.id;
    const data = req.body;
    try {
        const newUser = await User.findByIdAndUpdate(userid, data, { runValidators: true });
        res.send(newUser);
    }
    catch (err) {
        res.status(400).send(err.message);
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
