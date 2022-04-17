import express from "express";

const router = express.Router();

import userController from "../controller/userController.js";

router.route("/login").post(userController.handleLogin);
router.route("/register").post(userController.handleRegister);

export default router;
