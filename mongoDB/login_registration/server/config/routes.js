const userController = require('../controllers/users');

// export file as function to be used with app as parameter
module.exports = function(app) {
    //Root Request - render login/register page
    app.get('/', userController.index);
    //Register user
    app.post('/register', userController.register);
    //Login user
    app.post('/login', userController.login);
    //Render results page
    app.get('/results', userController.show);
    //Remove all session data, redirect to index
    app.post('/logout',userController.logout);
}
