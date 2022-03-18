"use strict";
import express from "express";
import { Router } from "express";
import cors from "cors";
// const mongodb = require('mongoose');
import mongodb from "mongoose";
import * as pg from "pg";
const { Pool } = pg.default;
const router = express.Router();
// const DB_MONGO = require('./app/config/db.config')
import("dotenv/config");

import { ObjectId } from "mongodb";

// connect mongodb

await mongodb.connect("mongodb://localhost:27017/local", {});

import { productModel } from "../model/product.model.js";
import { cartModel } from "../model/cart.model.js";
// const ObjectId = require("mongodb").ObjectID;

/* GET home page. */
// router.get('/getdata', function(req, res, next) {
//   pool.query('SELECT * FROM product_info', (err, response) => {
//     res.send(response.rows)
//   })

// });

// router.get("/getdetailProduct/:id", function (req, res, next) {
//   const data = productModel.find({
//     _id: req.params.id,
//   });
//   res.send(data);
// });

router.get("/getdetailProduct/:id", async (req, res) => {
  let idObject = new ObjectId(req.params.id);
  const data = await productModel.find({
    _id: idObject,
  });

  res.send(data);
  console.log("DaTA :", data);
});

export { router as detailRoute };
