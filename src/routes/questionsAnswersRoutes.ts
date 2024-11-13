import express from "express"
import wrapper from "../lib/wrapper"
import QuestionsAnswersService from "../cases/services/QuestionsAnswers"
import QuestionsAnswersController from "../cases/controllers/QuestionsAnswers"
import QuestionsAnswersRepository from "../cases/repositories/QuestionsAnswers"
import ClientProductRepository from "../cases/repositories/ClientProduct"
const questionsAnswersRoute = express.Router()
const questionsAnswersRepository = new QuestionsAnswersRepository()
const clinetProductRepository = new ClientProductRepository()
const questionsAnswersService = new QuestionsAnswersService(
  questionsAnswersRepository,
  clinetProductRepository
)
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
          client: req.user ? req.user.idcliente : null
        })
      )
      next()
    },
    settings: {
      level: "controlled"
    }
  })
)

export default questionsAnswersRoute
