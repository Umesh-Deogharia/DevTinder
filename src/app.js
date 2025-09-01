const express = require('express')

const app = express();

app.listen(7777, () => {
    console.log('Server is running Successfully');
});

app.use('/test', (req,res) => {
    res.send('hello hello hello');
})
app.use('/hello', (req,res) => {
    res.send('hello Umesh');
})
app.use((req, res) => {
    res.send('Hello From server @@');
})