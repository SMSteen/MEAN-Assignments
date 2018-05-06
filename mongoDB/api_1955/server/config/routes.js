//require persons.js controller file
const persons = require('../controllers/persons.js');

//export file as function to be used with app as paramter
module.exports = function(app){
    //all routes here

    app.get('/', function(request, response) {
        // serve up full collection of people born in 1955
        persons.index(request, response);
    })

    app.get('/new/:name/', function(request, response) {
        //add a name into database
        persons.create(request, response);
    })

    app.get('/remove/:name/', function(request, response) {
        //delete a name from database
        persons.delete(request, response);
    })
    
    app.get('/:name', function(request, response) {
        //bring up document of that particular person
        persons.show(request, response);
    })
}