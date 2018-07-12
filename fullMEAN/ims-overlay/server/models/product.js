const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');

const productSchema = new Schema(
  {
    upc: {
      type: Number,
      min: 000000000000,
      max: 999999999999,
      trim: true,
      required: [true, 'Please enter the UPC code for this item.']
    },
    dept: {
      type: String,
      required: [true, 'Please select the department.'],
      enum: [
        'ammunition',
        'archery',
        'firearms',
        'hunting',
        'license',
        'marine',
        'nc tags',
        'sporting goods'
      ],
      default: 'sporting goods'
    },
    category: {
      type: String,
      required: [true, 'Please select the category.'],
      enum: [
        'accessories',
        'apparel',
        'boats',
        'footwear',
        'labor',
        'optics',
        'outboard motors',
        'parts',
        'pistols',
        'rifles',
        'skiwear',
        'trailers'
      ],
      default: 'apparel'
    },
    brand: {
      type: String,
      trim: true,
      required: [true, 'Please enter the brand name of this product,']
    },
    desc: {
      type: String,
      trim: true,
      required: [
        true,
        'Please enter the name or item description of the product.'
      ]
    },
    cost: {
      type: Number,
      trim: true,
      required: [true, 'Please enter the cost of the item.'],
      validate: {
        validator(value) {
          return value >= 0;
        },
        message: 'Cost must be at least $0.'
      }
    },
    price: {
      type: Number,
      trim: true,
      min: [
        0,
        "Sorry, you can't pay folks to take the product away. Price must be at least $0."
      ],
      required: [true, 'Please enter the price of the product.'],
      validate: {
        validator(value) {
          return value >= 0;
        },
        message:
          "Sorry, you can't pay folks to take the product away. Price must be at least $0."
      }
    },
    suggestedRetail: {
      type: Number,
      trim: true
    },
    color: {
      type: String,
      trim: true
    },
    style: {
      type: String,
      trim: true
    },
    size: {
      type: String,
      trim: true
    },
    qty: {
      type: Number,
      trim: true,
      min: [0, "Sorry, you can't have a negative quantity."],
      required: [
        true,
        'How many of these do you have? Please enter the quantity.'
      ],
      validate: {
        validator(value) {
          return value >= 0;
        },
        message: "Sorry, you can't have a negative quantity."
      }
    },
    image: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema);
