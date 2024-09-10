import express from "express"
import userRoute from "./routes/user"
import homeRoute from "./routes/home"
const router = express.Router()

router.use("/user", userRoute)
router.use("/home", homeRoute)

export default router
