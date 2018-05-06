// Require mongoose and get the schema from our Quote model
const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
// Require moment for date formatting
var moment = require('moment');
// Use moment
moment().format();

//export our file as a function to be used with app as paramater
module.exports = function(app){
    //put all our routes here

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
}