"use strict";
import express from "express";
import { Router } from "express";
import { ObjectId } from "mongodb";
import bcrypt from "bcryptjs";
import mongodb from "mongoose";

// connect mongodb

await mongodb.connect("mongodb://localhost:27017/local", {});
import { userModel } from "../model/user.model.js";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = [];
      let user = await checkUserEmail(email);
      console.log("CHECK USER", user);
      if (user) {
        const checkPassword = await bcrypt.compare(password, user.password);
        console.log("CHECK PASSWORD", checkPassword);

        if (checkPassword) {
          userData.errCode = 3;
          userData.errMessage = "Success";
          userData.password = password;
          userData.user = user;
          resolve(userData);
        } else {
          userData.errCode = 2;
          userData.errMessage = "Your password is inconrect";
          resolve(userData);
        }

        resolve(userData);
      } else {
        userData.errCode = 1;
        userData.errMessage = "Your email not exist";
        resolve(userData);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await userModel.findOne({
        email: userEmail,
      });
      console.log("KQ : ", user);
      if (user) {
        resolve(user);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject;
    }
  });
};

let compareUserPassword = () => {
  return new Promise((resolve, reject) => {
    try {
    } catch (e) {
      reject(e);
    }
  });
};

export default {
  handleUserLogin: handleUserLogin,
};
