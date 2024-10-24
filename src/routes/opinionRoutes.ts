import express from "express"
import OpinionService from "../cases/services/Opnion"
import OpinionController from "../cases/controllers/Opnion"
import wrapper from "../lib/wrapper"
import OpinionRepository from "../cases/repositories/Opnion"
import ClientProductRepository from "../cases/repositories/ClientProduct"
import AuthorsRepository from "../cases/repositories/Authors"
const opinionRoute = express.Router()
const opinionRepository = new OpinionRepository()
const clientProductRepository = new ClientProductRepository()
const authorsRepository = new AuthorsRepository()
const opinionService = new OpinionService(
  opinionRepository,
  clientProductRepository,
  authorsRepository
)
const opinionController = new OpinionController(opinionService)

opinionRoute.get(
  "/",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await opinionController.opinionContent({
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

opinionRoute.get(
  "/:id",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await opinionController.getOpinionById({
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

export default opinionRoute
