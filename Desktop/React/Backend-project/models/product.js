const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Name is required"],
    minlength: 2,
    maxlength: 50
  },
  Price: {
    type: Number,
    required: [true, "Price is required"],
    min: 1
  },
  description: {
    type: String,
    minlength: 2,
    maxlength: 100
  },
  stockquantity: {
    type: Number,
    required: true,
    min: 1
  }
});

module.exports = mongoose.model("Product", productSchema);
