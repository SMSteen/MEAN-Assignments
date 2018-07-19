const { productController } = require('../controllers');
const router = require('express').Router();

const upload = require('../controllers/upload');

module.exports = router
  .get('/', productController.index)
  .post('/', upload.single('image'), productController.create)
  .get('/:productID', productController.show)
  .put('/:productID', upload.single('image'), productController.update)
  .delete('/:productID', productController.destroy);
