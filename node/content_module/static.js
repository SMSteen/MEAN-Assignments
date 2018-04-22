module.exports = function(request, response) {
    const http = require('http');
    const fs = require('fs')
    const url = require('url');

    //set up file components
    let path, fileLoc, contentType;
    let fileName = request.url.substr((request.url.lastIndexOf("/")+1)) //strip off leading fwd slashes/url paths
    let fileExt = fileName.slice(fileName.lastIndexOf(".")+1) //get ext of file requested
    
    // set up regex expressions
    let reFavi = /\/favicon.ico$/g;
    let reImgs = /\/\w+\.(jpg|JPG|gif|GIF|png|PNG|jfif|JFIF)$/g;
    let reHTML = /^\/cars|\/cats|\/catsandcars|\/cars\/new$/g;
    let reCSS = /\/\w+\.(css)$/g
    let reJS = /\/\w+\.(js)$/g;
    
    // assign file component values based on matching regex
    if(reImgs.test(request.url)){ //images
        path = './images/';
        contentType = 'image/' + fileExt
    } else if(reCSS.test(request.url)){ //css
        path = './stylesheets/';
        contentType = 'text/css'
    } else if(reJS.test(request.url)){ //javascript
        path = './scripts/';
        contentType = 'text/javascript'
    } else if(reFavi.test(request.url)){ //favicon
        path = '';
        contentType = 'image/ico'
    } else { //html
        fileName = fileName.replace('/') //remove all slashes from filename created by url
        path = './views/';
        contentType = 'text/html';
        fileExt = '.html';
    }

    // build the filepath
    if(request.url === '/'){ //at the index page
        fileName = 'index';
        // path = './views/';
        // contentType = 'text/html';
        // fileExt = '.html';
    } else if(request.url === '/cars/new'){
        fileName = 'carsnew'
    }

    if (contentType != 'text/html'){
        fileLoc = path + fileName;
    } else {
        fileLoc = path + fileName + fileExt;
    }
    
    fs.readFile(fileLoc, function (errors, contents){
        if (errors){
            response.end('Oops. File not found!!!');
        } else {
            response.writeHead(200, {'Content-Type': contentType});
            response.write(contents);
            response.end();
        }
    });
}