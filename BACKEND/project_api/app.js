import express from "express";
import { Router } from "express";
import mongoose from "mongoose";
import cors from "cors";
import indexRoute from "./routes/indexRoute.js";
import userRoute from "./routes/usersRoute.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/user", userRoute);

app.use("/api/index", indexRoute);

// indexRoute(app);

app.listen(4000);

export { app };
