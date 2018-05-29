const noteController = require('../controllers/notes');
const path = require('path');

const router = require('express').Router();

router
    .get('/notes', noteController.index)
    .post('/notes', noteController.create)
    .all('*', function(request, response, next) {
        response.sendFile(path.resolve('./dist/notes/index.html'))
    })
module.exports = router;