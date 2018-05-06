// require controllers.js file for all logic
const quotes = require('../controllers/quotes.js')

//export our file as a function to be used with app as paramater
module.exports = function(app){
    //put all our routes here

    // root request
    app.get('/', function(request, response) {
        quotes.index(request, response);
    })
    // Add quote request 
    app.post('/quotes', function(request, response) {
        quotes.create(request, response);    
    })
    // Show all quotes request
    app.get('/quotes', function(request, response){
        quotes.show(request, response);
    })
}