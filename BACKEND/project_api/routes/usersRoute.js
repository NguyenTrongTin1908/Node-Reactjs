let express = require("express");
let router = express.Router();
let userController = require("../controller/userController");

const user_router = express.Router();

/* GET users listing. */
router.post("/login", userController.handleLogin);

module.exports = user_router;
