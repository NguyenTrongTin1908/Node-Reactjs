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

/* GET home page. */
// router.get('/getdata', function(req, res, next) {
//   pool.query('SELECT * FROM product_info', (err, response) => {
//     res.send(response.rows)
//   })

// });

router.get("/getdatamongodb", async (req, res) => {
  const data = await productModel.find({
    trangthai: "con",
  });

  res.send(data);
  console.log("DaTA :", data);

  //console.log(session.cart);
});

export { router as indexRoute };
