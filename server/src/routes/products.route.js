import express from "express";
import {
    getAllProducts,
    getProductById,
    createProduct
} from "../controllers/products.controllers.js";
import catchasync from "../handleerror/catchasync.js";
const route = express.Router();

// Product routes
route.get("/", catchasync(getAllProducts))
route.get("/:id", catchasync(getProductById));
route.post("/", catchasync(createProduct))

export default route;
