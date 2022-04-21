import express from "express";
import { Router } from "express";
import mongoosedb from "mongoose";

// connect mongodb

import { ObjectId } from "mongodb";

// // connect mongodb

const dbHost = process.env.DB_HOST || "localhost";
const dbPort = process.env.DB_PORT || 27017;
const dbName = process.env.DB_NAME || "local";
const mongoUrl = `mongodb://${dbHost}:${dbPort}/${dbName}`;

await mongoosedb.connect(mongoUrl, {});

export default { mongoosedb };
