"use strict";
import express from "express";
import { Router } from "express";
import cors from "cors";
// const mongodb = require('mongoose');
import mongodb from "mongoose";
const router = express.Router();
// const DB_MONGO = require('./app/config/db.config')
import("dotenv/config");

import { ObjectId } from "mongodb";

import userController from "../controller/userController.js";

const userRoute = express.Router();

/* GET users listing. */
router.post("/login", userController.handleLogin);

export { router as userRoute };
