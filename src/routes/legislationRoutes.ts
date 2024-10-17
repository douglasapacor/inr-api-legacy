import express from "express"
import wrapper from "../lib/wrapper"
import LegislationService from "../cases/services/Legislation"
import LegislationController from "../cases/controllers/Legislation"
const legislationRoute = express.Router()
const legislationService = new LegislationService()
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
