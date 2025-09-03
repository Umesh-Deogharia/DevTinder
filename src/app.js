const express = require('express')

const app = express();
const { adminAuth } = require('./middleware/auth')

// app.use('/',(req, res) => {
//     res.send('Hello From server @@');
// })
// app.use('/admin', adminAuth);

app.get('/admin/user',adminAuth,  (req, res, next) => {
    // res.send('Test From Server');
    console.log("First response");
    res.send('first')
    // next();
}
//     , (req, res, next) => {
//     console.log("2nd response");
//     next();
// }, (req, res, next) => {
//     console.log("4th Response");
//     next();
// }, (req, res, next) => {
//     console.log("5th Response");
//     next();
// }, (req, res, next) => {
//     console.log("6th Response");
//     next();

// }, (req, res, next) => {
//     console.log("7th Response");
//     next();

// }, (req, res, next) => {
//     console.log("8th Response");
//     res.send('8th response')
//     next();

// }, (req, res, next) => {
//     console.log("9th Response");
//     next();

// }, (req, res, next) => {
//     console.log("10th Response");
//     res.send('10th response')
// },
)
app.listen(7777, () => {
    console.log('Server is running Successfully');
});