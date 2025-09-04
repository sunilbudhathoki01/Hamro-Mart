import express, { Router } from "express";
import productController from "../services/product.js";
const router=express.Router();

router.get("/",productController.getAllProducts)
router.get("/:id",productController.getProductsById)
router.post("/",productController.createProducts)
router.delete("/:id",productController.deleteProductsById)
router.put("/:id",productController.updateProducts)

export default router