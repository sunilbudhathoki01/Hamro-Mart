import express from 'express'
import cartController from "../controllers/cart.js"
const router=express.Router();
router.get("/",cartController.getAllCarts)
router.get("/:id",cartController.getCartById)
router.post("/",cartController.createCart)
router.delete("/:id",cartController.deleteCart)
router.put("/:id",cartController.updateCart)

export default router