import express from "express"
import userController from "../controllers/user.js"

const router=express.Router()
router.get("/",userController.getAllUsers)
router.get("/:id",userController.getUserById)
router.post("/",userController.createUsers)
router.delete("/:id",userController.deleteUsersById)
router.put("/:id",userController.updateUsers)

export default router