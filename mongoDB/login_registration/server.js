//Require all modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10; //using variable for ease of changing in future
const mongoose = require('mongoose');
const { Schema } = mongoose;
const port = process.env.PORT || 8000;

//Create an Express App
const app = express();
//Integrate body-parser
app.use(bodyParser.urlencoded({ extended: true }));
//Set Static & Views Folder Directories, View Engine to EJS
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
//Connect to mongodb usin mongoose
mongoose.connect('mongodb://localhost/login_register');
mongoose.connection.on('connected', () => console.log('MongoDB connected'));
//Use session; create secret key for encryption
app.set('trust proxy', 1) // trust first proxy -- for development testing
app.use(session({
    name: 'session',
    secret: 'Id0n0tH8mean',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 300000 }, //5 minute timeout
}));
// middleware to make 'user' available to all templates
app.use(function(request, response, next) {
    response.locals.user = request.session.user;
    next();
});

//Create RegExes for validation
const emailRegEx = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/; //proper email format
const passwordRegEx = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@!#&$]{8,}$/; //confirm 1 uppercase, 1 num, 8 characters, limited symbols
const nameRegEx = /^[\sa-zA-Z.-]{2,}$/; //only letters, dashes, periods and spaces included in name and minimum of 2 characters
//Create a User Model with Schema (blueprint)
const userSchema = new Schema({
    //fields here
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

//Set the Schema in our Models for Uers
const User = mongoose.model('User', userSchema);

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

//Handle Routes
//Root Request - render login/register page
app.get('/', function(request, response){
    response.render('index');
})
//Register user
app.post('/register', function(request, response){
    console.log("POST DATA", request.body);
    //save form data in session in case of errors
    request.session.fname = request.body.first_name;
    request.session.lname = request.body.last_name;
    request.session.email = request.body.email;
    request.session.dob = request.body.birthdate;

    User.create(request.body)
        .then(user => {
            console.log('successfully added a user', user)
            //store user name, id in session
            request.session.first_name = user.first_name;
            request.session.user_id = user._id;
            // redirect to results page
            response.redirect('/results');
        })
        .catch(error => {
            //capture and save error, render to page
            const errors = Object.keys(error.errors).map(key => {
                return error.errors[key].message;
            });
            //render new with errors
            response.render('index', {errors: errors, session: request.session});
        })
})
//Login user
app.post('/login', function(request, response){
    console.log(request.body)
    User.findOne({email: request.body.email})
        .then(user => {
            if(user === null){ //user doesn't exist
                response.render('index', {error: "You have entered an invalid email address or password."})
            } else {
                console.log('found the user', user)
                //store user name, id in session
                request.session.first_name = user.first_name;
                request.session.user_id = user._id;
                //compare passwords
                bcrypt.compare(request.body.password, user.password)
                    .then(result => {
                        if(!result){ //passwords do not match
                            response.render('index', {error: "You have entered an invalid email address or password."})
                        } else {
                            response.render('results', {user: user})
                        }
                    })
            }
        })
        .catch(error => {
            response.render('index', {error: "You have entered an invalid email address or password."})
        })
})
//Render results page
app.get('/results', function(request, response){
    User.findById(request.session.user_id)
        .then(user => {
            response.render('results', {user: user})
        })
        .catch(error => {
            console.log(error)
        })
})
//Remove all session data, redirect to index
app.post('/logout', function(request, response){
    request.session.destroy();
    response.redirect('/');
})

//Set Server to listen on Port
app.listen(port, function(){
    console.log(`listening on port ${port}`);
})


// //FOR CREATING HASHED PASSWORDS
// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     // Store hash in your password DB.
// });
// // FOR CHECKING HASHED PASSWORDS?
// // Load hash from your password DB.
// bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
//     // res == false
// });