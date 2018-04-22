// import required modules
const http = require('http');
const fs = require('fs')
const static_contents = require('./static.js')

// creating a server using http module:
var server = http.createServer(function (request, response){
    static_contents(request, response);
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");