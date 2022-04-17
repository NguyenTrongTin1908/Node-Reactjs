import userService from "../services/userService.js";
import bcrypt from "bcryptjs";
import cors from "cors";
import express from "express";

import mongoosedb from "../config/db.config.js";
const router = express.Router();
import("dotenv/config");

import { ObjectId } from "mongodb";
import { userModel } from "../model/user.model.js";

let handleRegister = async (request, response) => {
  // const { error } = registerValidator(request.body);

  // if (error) return response.status(422).send(error.details[0].message);

  const checkEmailExist = await userModel.findOne({
    email: request.body.email,
  });

  if (checkEmailExist) return response.status(422).send("Email is exist");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(request.body.password, salt);

  const user = new userModel({
    email: request.body.email,
    password: hashPassword,
  });

  try {
    const newUser = await user.save();
    await response.send(newUser);
    // return response.status(200).json({
    //   errCode: 3,
    //   userData: email,
    // });
  } catch (err) {
    response.status(400);
  }
};

let handleLogin = async (req, res) => {
  console.log("hi");
  let email = "";
  let password = "";
  if (req.body.email && req.body.password) {
    email = req.body.email;
    password = req.body.password;
  }
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input parameter!",
    });
  }

  let userData = await userService.handleUserLogin(email, password);

  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    userData: userData.user,
  });
};

export default {
  handleLogin: handleLogin,
  handleRegister: handleRegister,
};
