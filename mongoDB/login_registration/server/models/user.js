//require mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;
// require bcrypt for hashing passwords
const bcrypt = require('bcrypt');
const saltRounds = 10; //using variable for ease of changing in future

//Create RegExes for validation
const emailRegEx = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/; //proper email format
const passwordRegEx = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@!#&$]{8,}$/; //confirm 1 uppercase, 1 num, 8 characters, limited symbols
const nameRegEx = /^[\sa-zA-Z.-]{2,}$/; //only letters, dashes, periods and spaces included in name and minimum of 2 characters

//User Model
const userSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
        validate: {
            validator: function(v){
                return nameRegEx.test(v);
            },
            message: "Please enter the first name, ensuring invalid characters (numbers, symbols) are not included."
        },
        required: [true, "Please enter your first name."],
    },
    last_name: {
        type: String,
        trim: true,
        validate: {
            validator: function(v){
                return nameRegEx.test(v);
            },
            message: "Please enter the last name, ensuring invalid characters (numbers, symbols) are not included."
        },
        required: [true, "Please enter your last name."],
    },
    email: {
        type: String,
        trim: true,
        validate: {
            validator: function(v){
                return emailRegEx.test(v);
            },
            message: "Please enter a valid email address.",
        },
        required: [true, "An email address is required."],
    },
    password: {
        type: String,
        trim: true,
        validate: {
            validator: function(v){
                return passwordRegEx.test(v);
            },
            message: "Please enter a valid password. Password must be at least 8 characters, include one uppercase letter and one number. Symbols other than @, !, #, &, $ are not allowed."
        },
        required: [true, "A password is required."],
    },
    birthdate: {
        type: Date,
        required: [true, "Please enter your date of birth."],
    }
}, 
{timestamps: true});

//Automatically hash the password before it's saved to the database
userSchema.pre('save', function(next){
    const user = this;
    bcrypt.hash(user.password, saltRounds)
        .then(hashed_password => {
            user.password = hashed_password;
            next();
        })
        .catch(error => {
            console.log(error);
        })
})

module.exports = mongoose.model('User', userSchema);