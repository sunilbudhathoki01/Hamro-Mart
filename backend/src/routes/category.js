import express from "express"
import categoryController from "../controllers/category.js"
const router=express.Router()
router.get("/",categoryController.getAllCategory)
router.get("/:id",categoryController.getCategoryById)
router.post("/",categoryController.createCategory)
router.delete("/:id",categoryController.deleteCategory)
router.put("/:id",categoryController.updateCategory)

export default router