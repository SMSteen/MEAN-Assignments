const prairieDogController = require('../controllers/prairiedogs');

// export file as function to be used with app as parameter
module.exports = function(app) {
    // Root Request - render index, show all prairiedogs
    app.get('/', prairieDogController.index);
    // New - render form to add new prairiedog
    app.get('/prairiedogs/new', prairieDogController.new);
    // New - post new prairiedog to database
    app.post('/prairiedogs/new', prairieDogController.create);
    // Show a prairie dog
    app.get('/prairiedogs/:id', prairieDogController.show);
    // Edit - render form to edit a prairiedog
    app.get('/prairiedogs/edit/:id', prairieDogController.edit)
    // Edit - post changes to prairiedog to database
    app.post('/prairiedogs/edit/:id', prairieDogController.update);
    // Destroy a prairiedog
    app.get('/prairiedogs/destroy/:id', prairieDogController.destroy);
}