const express = require("express");
require("./db/mongoose");
const restaurantRouter = require("./routers/restaurant-router");
const productRouter = require("./routers/product-router");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(restaurantRouter);
app.use(productRouter);
app.use("/restaurant-image", express.static("restaurant-image"));

app.listen(port, () => [console.log(`port is up on port ${port}`)]);
