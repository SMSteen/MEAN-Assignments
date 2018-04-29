//Load the express module
const express = require("express");
//Load path module
const path = require('path');

//Create a port for our server
const port = process.env.PORT || 8000;
//Invoke express and store resulting app
const app = express();

//Tell our app to use the "/static" folder to deliver static contents
app.use(express.static(path.join(__dirname, "./static")));

//Set the location for app to find ejs views
app.set('views', path.join(__dirname, './views'));
//Set the view engine so it knows we're using ejs as templating system
app.set('view engine', 'ejs');

// Root route to render the index.ejs view.
app.get('/', function(request, response) {
    response.render("index");
})
// create a variable for the server object
const server = app.listen(port, function(){
    console.log(`listening on port ${port}`);
});
// pass the server into the socket listen method
const io = require('socket.io').listen(server);
// set up server socket code
io.sockets.on('connect', function (socket) {
    // all server socket code goes in here
    console.log("Client/socket is now connected!");
    console.log("Client/socket id is: ", socket.id);

    //broadcast a notice to all other users acknowledging new user arrival
    socket.broadcast.emit('newUser', socket.id)

    socket.on("notify", function(){
        console.log(socket.id, " pushed the button")
        //broadcast a notice to all other users that notify button pushed
        socket.broadcast.emit('userNotice', socket.id)
    })
    socket.on("disconnect", function(){
        console.log(socket.id, "has left the building")
        //broadcast a notice to all other users acknowledging user departure
        socket.broadcast.emit('userDisconnected', socket.id)
    })
})