const Product = require('mongoose').model('Product');
const fs = require('fs');
const upload = require('../controllers/upload');

module.exports = {
  index(request, response) {
    Product.find({})
      .sort({ dept: 1, brand: 1 })
      .then(products => response.json(products))
      .catch(console.log);
  },
  create(request, response) {
    console.log('product-controller --> adding product to database');
    // if (request.file) {
    //   request.body.image = request.file.filename;
    //   console.log('request.file', request.file);
    //   // request.body.image = request.file;
    //   // request.body.image.data = fs.readFileSync(request.file.path);
    //   // request.body.image.contentType = request.file.mimetype;
    // }
    Product.create(request.body)
      .then(product => {
        console.log('request.body', request.body);
        if (request.file) {
          // request.body.image = '/public/uploads/' + request.file.filename;
          console.log('request.file', request.file.path, request.file.mimetype);
          // request.body.image = request.file;
          // request.body.image.data = fs.readFileSync(request.file.path);
          // request.body.image.contentType = request.file.mimetype;
          const id = product._id;
          console.log(id);
          return Product.findByIdAndUpdate(
            id,
            {
              $set: {
                image: {
                  data: fs.readFileSync(request.file.path),
                  contentType: request.file.mimetype
                }
              }
            },
            { new: true }
          );
        }
      })
      .then(product => {
        console.log(
          'product-controller --> product successfully created',
          product
        );
        response.json(product);
      })
      .catch(error => {
        console.log(error);
        response
          .status(400)
          .json(
            Object.keys(error.errors).map(key => error.errors[key].message)
          );
      });
  },

  show(request, response) {
    console.log('product-controller --> getting one product from database');
    Product.findById(request.params.productID)
      .then(product => response.json(product))
      .catch(console.log);
  },

  update(request, response) {
    console.log('product-controller --> updating product in database');
    if (request.file) {
      ('product-controller, got an image');
      request.body.image = '/public/uploads/' + request.file.filename;
    }
    Product.findByIdAndUpdate(request.params.productID, request.body, {
      new: true
    })
      .then(product => response.json(product))
      .catch(console.log);
  },

  destroy(request, response) {
    console.log('product-controller --> deleting product from database');
    Product.findByIdAndRemove(request.params.productID)
      .then(product => response.json(product))
      .catch(console.log);
  }
};
