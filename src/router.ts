import express from "express"
import userRoutes from "./routes/userRoutes"
import homeRoutes from "./routes/homeRoutes"
import newsRoutes from "./routes/newsRoutes"
import jurisprudenceRoutes from "./routes/jurisprudenceRoutes"
import legislationRoutes from "./routes/legislationRoutes"
import opinionRoutes from "./routes/opinionRoutes"
import questionsAnswersRoutes from "./routes/questionsAnswersRoutes"
import messagesEditorsRoutes from "./routes/messagesEditorsRoutes"
import pareceresRoutes from "./routes/pareceresRoutes"
import classifirsRoutes from "./routes/classifiersRoutes"
import storiesTradeRoutes from "./routes/storiesTradeRoutes"
import descriptionRoute from "./routes/descriptionRoutes"
import supplementsRoutes from "./routes/supplementsRoutes"

const router = express.Router()

router.use("/user", userRoutes)
router.use("/home", homeRoutes)
router.use("/news", newsRoutes)
router.use("/jurisprudence", jurisprudenceRoutes)
router.use("/legislation", legislationRoutes)
router.use("/opinion", opinionRoutes)
router.use("/questions-answers", questionsAnswersRoutes)
router.use("/messages-editors", messagesEditorsRoutes)
router.use("/pareceres", pareceresRoutes)
router.use("/classifiers", classifirsRoutes)
router.use("/stories-trade", storiesTradeRoutes)
router.use("/description", descriptionRoute)
router.use("/supplements", supplementsRoutes)

export default router
