const Product = require('mongoose').model('Product');
const upload = require('../controllers/upload');
const fs = require('fs');

module.exports = {
  index(request, response) {
    Product.find({})
      .sort({ dept: 1, brand: 1 })
      .then(products => response.json(products))
      .catch(console.log);
  },
  create(request, response) {
    console.log('product-controller --> adding product to database');
    const { body: product, file } = request;

    try {
      const { path: filePath, mimetype: contentType } = file;
      const fileContent = {
        data: fs.readFileSync(filePath),
        contentType
      };
      product.image = fileContent;
    } catch (e) {
      delete product.image;
    }

    Product.create(request.body)
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
    const { body: product, file } = request;

    try {
      const { path: filePath, mimetype: contentType } = file;
      const fileContent = {
        data: fs.readFileSync(filePath),
        contentType
      };
      product.image = fileContent;
    } catch (e) {
      delete product.image;
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
