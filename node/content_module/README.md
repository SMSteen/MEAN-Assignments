Node - Week 2
Optional Assignment: Content Module
As your apps get larger and your server is responsible for serving more files, your app.js will get more complex and harder to read. Instead of having so many if/else statements to serve different static file contents, you're going to create a module that will serve static contents automatically. 

Make your static.js file as elegant as possible. With proper refactoring you could make this work for hundreds/thousands of files with just a few lines of code. Your code should work when we add new files in the views folders, or if we were to add new images (e.g. /images/car.jpg), new stylesheets (e.g. /stylesheets/others.css), etc. If the file the user is seeking is not there, it should also render an error message.