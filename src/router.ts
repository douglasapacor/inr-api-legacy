import express from "express"
import userRoute from "./routes/user"
import homeRoute from "./routes/home"
import newsRoute from "./routes/news"
const router = express.Router()

router.use("/user", userRoute)
router.use("/home", homeRoute)
router.use("/news", newsRoute)

export default router
