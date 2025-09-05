const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');

const app = express();

app.use(express.json())

// const { adminAuth } = require('./middleware/auth')

app.post("/signup", async (req, res) => {
    
    // const user = userSchema({
    //     firstName:'Virat',
    //     lastName: "Kohli",
    //     emailId: "umesh@gmail.com",
    //     password: 'umesh12345'
    // })

    const user = new User(req.body)
    await user.save();
    res.send('Data Sent Successfully');
})



connectDB().then(() => {
    console.log('Database Connection Established');
    app.listen(7777, () => {
        console.log('Server is running Successfully');
    });
}).catch((err) => {
    console.log('Database not connected', err);
});
