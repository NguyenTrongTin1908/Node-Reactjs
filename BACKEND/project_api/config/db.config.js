import express from "express";
import { Router } from "express";
import mongoosedb from "mongoose";

// connect mongodb

import { ObjectId } from "mongodb";

// // connect mongodb

await mongoosedb.connect("mongodb://localhost:27017/local", {});

export default { mongoosedb };
