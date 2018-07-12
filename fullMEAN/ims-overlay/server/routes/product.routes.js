const { productController } = require('../controllers');
const router = require('express').Router();

const upload = require('../controllers/upload');

module.exports = router
  .get('/', productController.index)
  // .post('/', productController.create)
  .post('/', upload.single('image'), function(request, response) {
    console.log('getting to controller');
    console.log('file info', request.file);
    console.log('form data', request.body);
  })
  .get('/:productID', productController.show)
  .put('/:productID', productController.update)
  .delete('/:productID', productController.destroy);
