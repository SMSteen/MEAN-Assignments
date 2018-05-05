// Require all modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const port = process.env.PORT || 8000;

// Create an Express App
const app = express();
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Set Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Set Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Set View Engine to EJS
app.set('view engine', 'ejs');
// Connect to mongodb using mongoose
mongoose.connect('mongodb://localhost/message_board')
mongoose.connection.on('connected', () => console.log('Mongodb connected'));

// Create a Message Model with Schema (blueprint)
const messageSchema = new Schema({
    name: {
        type: String,
        required: [true, "Don't be shy. Enter your name."],
        trim: true,
    },
    message: {
        type: String,
        required: [true, "Oops. You forgot to enter your message."],
    },
    comments: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Comment' 
        }
    ]
}, 
{timestamps: true});

// Create a Comment Model with Schema (blueprint)
const commentSchema = new Schema({
    name: {
        type: String,
        required: [true, "Don't be shy. Enter your name."],
        trim: true,
    },
    comment: {
        type: String,
        required: [true, "Oops. You forgot to enter your comment."],
    },
    message: { 
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }, 
}, {timestamps: true});
  
// Set the Schemas in our Models for Comment and Message
const Comment = mongoose.model('Comment', commentSchema);
const Message = mongoose.model('Message', messageSchema);

// Routes
// Root Request - render index, show all messages
app.get('/', function(request, response) {
    Message.find({})
        .populate('comments')
        .then(messages => {
            console.log(messages);
            response.render('index', {messages: messages});
        })
        .catch(error => {
            console.log(error);
        })
})

// post new message to database
app.post('/message', function(request, response) {
    console.log("POST DATA", request.body);
    // create a new message
    Message.create(request.body)
        .then(message => {
            console.log('successfully added a message', message)
            // redirect to index page
            response.redirect('/')
        })
        .catch(error => {
            //capture and save error, render to page
            const errors = Object.keys(error.errors).map(key => {
                return error.errors[key].message;
            });
            //render new with errors
            response.render('index', {errors: errors});
        })
})

// post new comment to database
app.post('/message/:id', function(request, response) {
    console.log("POST DATA", request.body);
    let id = request.params.id;
    // create a new comment
    Comment.create(request.body)
        .then(comment => {
            return Message.findById(id)
                .then(message => {
                    message.comments.push(comment);
                    return message.save();
                })
        })
        .then(() => {
            response.redirect('/')
        })
        .catch(error => {
            //capture and save error, render to page
            const errors = Object.keys(error.errors).map(key => {
                return error.errors[key].message;
            });
            //render new with errors
            response.render('index', {errors: errors});
        })
})


// Setting our Server to Listen on Port: 8000
app.listen(port, function() {
    console.log("listening on port 8000");
})