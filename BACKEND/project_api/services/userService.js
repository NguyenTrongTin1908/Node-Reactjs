"use strict";
import express from "express";
import { Router } from "express";
import { ObjectId } from "mongodb";
import mongodb from "mongoose";

// connect mongodb

await mongodb.connect("mongodb://localhost:27017/local", {});
import { userModel } from "../model/user.model.js";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = [];
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let checkpassword = await userModel.findOne({
          password: password,
        });

        if (checkpassword) {
          userData.errCode = 3;
          userData.errMessage = "Success";
          userData.data = checkpassword;
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
    console.log("email : ", userEmail);
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
