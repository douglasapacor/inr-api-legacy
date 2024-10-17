import express from "express"
import wrapper from "../lib/wrapper"
import QuestionsAnswersService from "../cases/services/questionsAnswers"
import QuestionsAnswersController from "../cases/controllers/questionsAnswers"
const questionsAnswersRoute = express.Router()
const questionsAnswersService = new QuestionsAnswersService()
const questionsAnswersController = new QuestionsAnswersController(
  questionsAnswersService
)

questionsAnswersRoute.get(
  "/",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await questionsAnswersController.questionsAnswersContent({
          limit: req.query.limit ? +req.query.limit : 12,
          page: req.query.page ? +req.query.page : 0
        })
      )
      next()
    },
    settings: {
      level: "free"
    }
  })
)

questionsAnswersRoute.get(
  "/:id",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await questionsAnswersController.getQuestionsAnswersById({
          id: +req.params.id,
          client: req.user.idcliente
        })
      )
      next()
    },
    settings: {
      level: "full"
    }
  })
)

export default questionsAnswersRoute
