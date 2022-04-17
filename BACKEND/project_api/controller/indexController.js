import express from "express";
import { Router } from "express";
import cors from "cors";
// const mongodb = require('mongoose');
import mongodb from "mongoose";
import mongoosedb from "../config/db.config.js";
const router = express.Router();
import("dotenv/config");

import { ObjectId } from "mongodb";

import { productModel } from "../model/product.model.js";
import { cartModel } from "../model/cart.model.js";
import { billModel } from "../model/bill.model.js";

const getAllProduct = async (req, res, next) => {
  const data = await productModel.find({
    trangthai: "con",
  });

  console.log("xuat data");

  res.send(data);
};

// const st= async (req, res, next) => {
//   next();
// },
//   async (req, res, next) => {};

const getDetailProduct = async (req, res, next) => {
  let idObject = new ObjectId(req.params.id);
  const data = await productModel.find({
    _id: idObject,
  });

  res.send(data);
};

const delProduct = async (req, res) => {
  let idObject = new ObjectId(req.params.id);
  const data = await productModel.findByIdAndDelete({
    _id: idObject,
  });

  res.send(data);
  console.log("DaTA :", data);
};

const searchProduct = async (req, res) => {
  var key = req.query.searchKey || "";

  console.log("keySearch la ", key);
  let data = null;

  data = await productModel.find({ maloaisp: { $regex: key } });

  console.log("data file la ", data.length);

  if (data.length == 0) {
    data = await productModel.find({ tensp: { $regex: key } });
  }
  res.send(data);
};

const fillerProduct = async (req, res) => {
  var key = req.query.fillerKey || "";

  console.log("key la ", key);
  // var querysearchbar = `"\" + ${key} + \""`;
  const data = await productModel.find({ maloaisp: { $regex: key } });

  res.send(data);
};

const detailProduct = async (req, res) => {
  let idObject = new ObjectId(req.params.id);
  const data = await productModel.find({
    _id: idObject,
  });

  res.send(data);
  console.log("DaTA :", data);
};

const saveBill = async (req, res) => {
  console.log("da");
  var account = req.body.account;
  var billInfo = req.body.bill;
  var info = req.body.info;
  // console.log("saveBill : ");

  const user = await billModel.findOne({ email: account.email });

  console.log("User la ", user);

  // console.log(req.body.account);
  console.log(req.body.bill);
  // console.log(req.body.info);

  const bill = new billModel({
    name: info._name,
    phone: info._phone,
    address: info._address,
    user: user._id,
    total_payment: billInfo.total,
  });

  try {
    const newBill = await bill.save();
    res.send(newBill);
  } catch (error) {}
};

// export default { index_controller };
export default {
  getAllProduct,
  getDetailProduct,
  delProduct,
  searchProduct,
  fillerProduct,
  detailProduct,
  saveBill,
};
