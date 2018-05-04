// Require the Express Module
const express = require('express');
// Create an Express App
const app = express();
// Require body-parser (to receive post data from clients)
const bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
const path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Require mongoose
const mongoose = require('mongoose');
// Connect to mongodb using mongoose
mongoose.connect('mongodb://localhost/prarie_dogs')

// Create a prairiedogSchema Model with Schema (blueprint)
const prairiedogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Brag away. Enter your prairie dog's name please."],
        minlength: [2, "Don't be bashful. Nicknames are ok, but the name entered must be at least 2 characters."], 
        trim: true,
    },
    gender: {
        type: String,
    },
    weight: {
        type: Number,
    },
    personality: {
        type: String,
        required: [true, "What's your prairie dog like? Spunky, sweet, grouchy?"],
        trim: true,
    },
    kind: {
        type: String,
    }
},
{
  timestamps: true,
});
// Set the Schema in our Models as PrairieDog
mongoose.model("PrairieDog", prairiedogSchema);
// Retrieve the Schema from our Models named PrairieDog
const PrairieDog = mongoose.model("PrairieDog");

// Routes
// Root Request - render index, show all prairiedogs
app.get('/', function(request, response) {
    PrairieDog.find({})
        .then(prairiedogs => {
            console.log(prairiedogs);
            response.render('index', {prairiedogs: prairiedogs});
        })
        .catch(error => {
            console.log(error);
        })
})
// New - render form to add new prairiedog
app.get('/prairiedogs/new', function(request, response) {
    response.render('new');
})
// New - post new prairiedog to database
app.post('/prairiedogs/new', function(request, response) {
    console.log("POST DATA", request.body);
    // create a new prairiedog
    const prairiedog = new PrairieDog({
        name: request.body.name,
        gender: request.body.gender,
        weight: request.body.weight,
        personality: request.body.personality,
        kind: request.body.kind,
    });
    prairiedog.save()
        .then(prairiedog => {
            console.log('successfully added a prairie dog', prairiedog)
            let id = prairiedog._id;
            // redirect to prairiedog id page
            response.redirect('/prairiedogs/'+id)
        })
        .catch(error => {
            //capture and save error, render to page
            const errors = Object.keys(error.errors).map(key => {
                return error.errors[key].message;
            });
            //render new with errors
            response.render('new', {errors: errors});
        })
})
// Show a prairie dog
app.get('/prairiedogs/:id', function(request, response) {
    let id = request.params.id;
    PrairieDog.findById(id)
        .then(dog => {
            console.log(dog);
            response.render('show', {dog: dog});
        })
        .catch(error => {
            console.log(error);
        })
})
// Edit - render form to edit a prairiedog
app.get('/prairiedogs/edit/:id', function(request, response) {
    let id = request.params.id;
    PrairieDog.findById(id)
        .then(dog => {
            console.log(dog);
            response.render('edit', {dog: dog});
        })
        .catch(error => {
            //capture and save error, render to page
            const errors = Object.keys(error.errors).map(key => {
                return error.errors[key].message;
            });
            //render new with errors
            response.render('edit', {errors: errors});
        })
})
// Edit - post changes to prairiedog to database
app.post('/prairiedogs/edit/:id', function(request, response){
    let id = request.params.id;
    PrairieDog.findByIdAndUpdate(id, request.body, {new: true})
        .then(dog => {
            console.log(dog);
            response.redirect('/prairiedogs/'+id);
        })
        .catch(error => {
            console.log(error);
        })
})
// Destroy a prairiedog
app.get('/prairiedogs/destroy/:id', function(request, response){
    let id = request.params.id;
    PrairieDog.findByIdAndRemove(id)
        .then(dog => {
            console.log('sucessfully removed prairie dog', id);
            response.redirect('/');
        })
        .catch(error => {
            console.log(error);
        })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})