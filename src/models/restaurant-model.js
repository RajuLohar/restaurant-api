const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    picture: {
      type: String
    },
    name: {
      type: String,
      required: true,
      trim:true
    },
    address: {
      type: String,
      required: true,
      trim:true
    },
    openingHours: {
      type: String,
      default:
        "Monday to Friday from 9 am to 6 pm and from Saturday to Sunday from 11 am to 8 pm",
    },
  });
  
  
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports=Restaurant;
