//require User model
const User = require('mongoose').model('User');
// require bcrypt for testing hashed passwords
const bcrypt = require('bcrypt');
const saltRounds = 10; //using variable for ease of changing in future

module.exports = {
    index(request, response) {
        response.render('index');
    },
    register(request, response) {
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
    },
    login(request, response) {
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
    },
    show(request, response) {
        User.findById(request.session.user_id)
        .then(user => {
            response.render('results', {user: user})
        })
        .catch(error => {
            console.log(error)
        })
    },
    logout(request, response) {
        request.session.destroy();
        response.redirect('/');
    },
}