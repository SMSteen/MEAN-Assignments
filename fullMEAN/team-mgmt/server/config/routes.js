const playerController = require('../controllers/players');
const path = require('path');

const router = require('express').Router();

router
    .get('/players', playerController.index)
    .post('/players', playerController.create)
    .put('/players/:playerID', playerController.update)
    .delete('/players/:playerID', playerController.destroy)

module.exports = router;