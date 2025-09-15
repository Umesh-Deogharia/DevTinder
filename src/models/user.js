const mongoose = require('mongoose');
const { default: isEmail } = require('validator/lib/isEmail');
const { default: isStrongPassword } = require('validator/lib/isStrongPassword');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        minLength: 4,
        maxLength: 30
    },
    lastName: {
        type: String,
        trim: true,
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: isEmail,
            message: "Invalid Email"
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: isStrongPassword,
            message: "Password is not strong enough"
        }
    },
    age: {
        type: Number,
        min: 18
    },
    gender: {
        type: String,

        validate(value) {
            if (!["male", "female", "others"].includes(value)) {
                throw new Error("Gender data is not valid");
            }
        }
    },
    image: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-TruksPXPI5imDL_kfzEfFiAZwg5AzHtWg&s"
    }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema);