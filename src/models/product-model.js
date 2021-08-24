const mongoose = require("mongoose");
const Restaurant = require("./restaurant-model");

const productSchema = new mongoose.Schema({
    photo: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      trim:true
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum:{
          values:['Sweet', 'Savory', 'Juice','cuisine']
      },
      default: "cuisine",
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Restaurant
    }
  });

  const Product = mongoose.model("Product", productSchema);

  module.exports=Product;
  