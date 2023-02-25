const express = require("express");

const {
  getProductById,
  createProduct,
  sortinasc,
  getProductsById,
  sortindesc,
  filtbylap,
  filtbytab,
  filtbytv
} = require("../controller/productconrol");

const productRouter = express.Router();

productRouter.get("/asc", sortinasc);
productRouter.get("/desc", sortindesc);
productRouter.get("/lap", filtbylap);
productRouter.get("/tv", filtbytv);
productRouter.get("/tab", filtbytab);
productRouter.post("/create", createProduct);

productRouter.get("/:Id", getProductById);

productRouter.get("/", getProductsById);

module.exports = {productRouter};