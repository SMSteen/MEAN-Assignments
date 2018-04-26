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

//Helper function to generate random number
function getRandomNo(){
    return Math.floor(Math.random() * (1000 - 1)) + 1;
}

//Enter all routes here
// Root route to render the index.ejs view.
app.get('/', function(req, res) {
    res.render("index");
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

    socket.on( "posting_form", function (data){
        let luckyNum = getRandomNo();
        //send an updated message reflecting form data
        socket.emit( 'updated_message', {response:  `You emitted the following information to the sever:  name: ${data.name}, location: ${data.location}, language: ${data.language}, comment: ${data.comment}`});
        // send a randomly generated # between 1-1000
        socket.emit('random_number', {response: `Your lucky number emitted by the server is ${luckyNum}!`})
    })
})