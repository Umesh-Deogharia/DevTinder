const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://NamsteMongo:nFAgZ49qIraUj8wg@cluster0.vd20duc.mongodb.net/devTinder');
}

module.exports = connectDB;