import express from "express";
import {
    getAllProducts,
    getProductById,
} from "../controllers/products.controllers.js";
import catchasync from "../handleerror/catchasync.js";
const route = express.Router();

// Product routes
route.get("/", catchasync(getAllProducts))
// .post("/", catchasync(createProduct));
route.get("/:id", catchasync(getProductById));

export default route;
