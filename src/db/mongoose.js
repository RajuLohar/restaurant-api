const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/restaurant-app-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


