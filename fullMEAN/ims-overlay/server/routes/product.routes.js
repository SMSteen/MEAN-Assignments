const { productController } = require('../controllers');
const router = require('express').Router();

const upload = require('../controllers/upload');

// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

module.exports = router
  .get('/', productController.index)
  // .post('/', productController.create)
  .post('/', upload.single('image'), productController.create)
  .get('/:productID', productController.show)
  // .put('/:productID', productController.update)
  .put('/:productID', upload.single('image'), productController.update)
  .delete('/:productID', productController.destroy);
