// Require mongoose and get the schema from our Quote model
const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
// Require moment for date formatting
var moment = require('moment');
// Use moment
moment().format();

//render the index on GET
exports.index = function(request, response){
    response.render('index');
}

//add a new quote on POST
exports.create = function(request, response){
    console.log("POST DATA", request.body);
    // create a new quote
    Quote.create(request.body)
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
}

//display all quotes on GET
exports.show = function(request, response){
    Quote.find({}).sort({createdAt: -1})
        .then(quotes => {
            response.render('quotes', {quotes, moment});
        })
        .catch(error => {
            console.log(error)
        })
}