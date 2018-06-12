const { bikeController } = require('../controllers');
const router = require('express').Router();

module.exports = router
    .get('/', bikeController.index)
    .get('/:book_id', bikeController.show)
    .post('/', bikeController.create)
    .put('/:book_id', bikeController.update)
    .delete('/:book_id', bikeController.destroy);