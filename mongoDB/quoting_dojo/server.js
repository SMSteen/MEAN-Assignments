// Require the Express Module
const express = require('express');
// Create an Express App
const app = express();
// Require body-parser (to receive post data from clients)
const bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require flash for flashing errors
const flash = require('express-flash');
// Use Flash
app.use(flash());
// Require session, for use with flash
const session = require('express-session');
// Use session; create secret key for encryption
app.use(session({
    name: 'session',
    secret: 'Id0n0tH8mean',
    resave: false,
    saveUninitialized: true,
}));
// Require moment for date formatting
var moment = require('moment');
// Use moment
moment().format();
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
mongoose.connect('mongodb://localhost/basic_mongoose')

// Create a Quote Model with Schema (blueprint)
const quoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Take credit for your quote! Enter your name please."],
        minlength: [2, "Don't be bashful. Nicknames are ok, but the name entered must be at least 2 characters."], 
        trim: true,
    },
    quote: {
        type: String,
        required: [true, "Oops. You forgot to enter your quote!"],
        trim: true,
    },
},
{
  timestamps: true,
});
// Set the Schema in our Models as Quote
mongoose.model("Quote", quoteSchema);
// Retrieve the Schema from our Models named Quote
const Quote = mongoose.model("Quote");

// Routes
// Root Request - render index
app.get('/', function(request, response) {
    response.render('index')
})
// Add User Request 
app.post('/quotes', function(request, response) {
    console.log("POST DATA", request.body);
    // create a new quote
    const quote = new Quote({
        name: request.body.name,
        quote: request.body.quote
    });
    //save the quote as a promise
    quote.save()
        .then(quote => {
            console.log('successfully added a quote', quote)
            //redirect to quotes page
            response.redirect('/quotes')
        })
        .catch(error => {
            //capture and save error, render to page
            const errors = Object.keys(error.errors).map(key => {
                return error.errors[key].message;
            });
            //render index with errors
            response.render('index', {errors: errors})
        });
    })
app.get('/quotes', function(request, response){
    Quote.find({}).sort({createdAt: -1})
        .then(quotes => {
            response.render('quotes', {quotes, moment});
        })
        .catch(error => {
            console.log(error)
        })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})