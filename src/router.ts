import express from "express"
import userRoute from "./routes/user"
import homeRoute from "./routes/home"
import newsRoute from "./routes/news"
import jurisprudenceRoute from "./routes/jurisprudence"
const router = express.Router()

router.use("/user", userRoute)
router.use("/home", homeRoute)
router.use("/news", newsRoute)
router.use("/jurisprudence", jurisprudenceRoute)

export default router
