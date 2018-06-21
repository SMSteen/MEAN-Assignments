const { productController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', productController.index)
  .post('/', productController.create)
  .get('/:productID', productController.show)
  .put('/:productID', productController.update)
  .delete('/:productID', productController.destroy);
