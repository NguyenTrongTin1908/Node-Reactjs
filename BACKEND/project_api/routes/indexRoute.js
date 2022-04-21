import express from "express";

const router = express.Router();

import indexController from "../controller/indexController.js";

router.route("/allProduct").get(indexController.getAllProduct);

router.route("/product/:id").get(indexController.getDetailProduct);
router.route("/search").get(indexController.searchProduct);
router.route("/filler").get(indexController.fillerProduct);
// router.route("/getdetailProduct/:id").get(indexController.detailProduct);
router.route("/bill").post(indexController.saveBill);

// console.log("KIEU LA", typeof indexController.getAllProduct);

export default router;
