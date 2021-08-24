const express = require("express");
const router = new express.Router();
const Product = require("../models/product-model");
const multer = require("multer");


const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'./product-image/')
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname)
  },
  
})
//upload image
const upload = multer({
  storage:storage,
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

router.post("/products/:ownerId",upload.single("photo"), async (req, res) => {
  const product = new Product({
    name: req.body.name, 
    price: req.body.price,
    photo: req.file.path,
    owner:req.params.ownerId
  });
  try {
    await product.save();
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/products/:ownerId", async (req, res) => {
  try {
    const product = await Product.find({owner:req.params.ownerId});
    res.send(product);
  } catch (e) {
    res.send(500).send();
  }
});

router.patch("/products/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "price", "category"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "invalid upates" });
  }

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (e) {
    res.send(500).send();
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
