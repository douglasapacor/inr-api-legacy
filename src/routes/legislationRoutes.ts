import express from "express"
import wrapper from "../lib/wrapper"
import LegislationService from "../cases/services/Legislation"
import LegislationController from "../cases/controllers/Legislation"
import LegislationRepository from "../cases/repositories/Legislation"
import ClientProductRepository from "../cases/repositories/ClientProduct"
const legislationRoute = express.Router()
const legislationRepository = new LegislationRepository()
const clientProductRepository = new ClientProductRepository()
const legislationService = new LegislationService(
  legislationRepository,
  clientProductRepository
)
const legislationController = new LegislationController(legislationService)

legislationRoute.get(
  "/",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await legislationController.legislationContent({
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

legislationRoute.get(
  "/:id",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await legislationController.getLegislationById({
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

export default legislationRoute
