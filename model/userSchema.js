const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter user name'],
        unique: [true, "Duplicate Username Not allowed"],
        trim: true,
        uppercase: true,
        minlength: 10,
        maxlength: 50,
    },
    firstname: {
        type: String,
        required: [true, 'Please enter first name'],
        trim: true,
        lowercase: true
    },
    lastname: {
        type: String,
        required: [true, 'Please enter last name'],
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        required: [true, 'Please enter password'],
        validate: function (value) {
            var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$&_])[A-Za-z\d#$&_]{0,6}$/;
            return passwordRegex.test(value);
        }
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Duplicate Email Not allowed"],
        trim: true,
        uppercase: true,
        validate: function (value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    type: {
        type: String,
        required: true,
        enum: ['admin', 'customer'],
        trim: true,
        lowercase: true
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;