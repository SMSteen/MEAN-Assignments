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

class Color{
    constructor(name, value){
        this.name = name;
        this.value = value;
    }
}
//create holder for last color chosen
let lastColor;
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
    socket.emit('connected', lastColor);
    // all server socket code goes in here
    console.log("Client/socket is now connected!");
    console.log("Client/socket id is: ", socket.id);

    socket.on( "colorChosen", function (colorData){
        //breakdown data object
        const {colorName, colorValue} = colorData;
        //create the new color
        const color = new Color (colorName, colorValue)
        //set the color for next user to connect
        lastColor = colorValue;
        //broadcast the color to all users
        io.emit("changeColor", color);
    });
})