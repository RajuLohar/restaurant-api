const express = require("express");
const router = new express.Router();
const Restaurant = require("../models/restaurant-model");
const multer = require("multer");

//upload image
const upload = multer({
  dest: "restaurant-image",
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }
    cb(undefined, true);
  },
  
});


router.post("/restaurants", upload.single("picture") ,async (req, res) => {
  const restaurant = new Restaurant({
    name:req.body.name,
    address:req.body.address,
    picture:req.file.path
  });
  try {
    await restaurant.save();
    res.status(201).send(restaurant);
    const ownerId=restaurant._id;
  } catch (e) {
    res.status(400).send(e);
  }
});


router.get("/restaurants", async (req, res) => {
  try {
    const restaurant = await Restaurant.find({});
    res.send(restaurant);
  } catch (e) {
    res.send(500).send();
  }
});

router.patch("/restaurants/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "address", "openingHours"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid update" });
  }

  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!restaurant) {
      return res.status(404).send();
    }
    res.send(restaurant);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/restaurants/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) {
      return res.status(404).send();
    }
    res.send(restaurant);
  } catch (e) {
    res.status(500).send();
  }
});



module.exports = router;
