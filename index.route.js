import express from "express"
import { deleteUser, getAll, signUp, update } from "../prisma/controllers/user.controller.js"
const router=express.Router()
router.route("/signup").post(signUp)
router.route("/users").get(getAll)
router.route("/update").patch(update)
router.route("/remove").delete(deleteUser)
export default router