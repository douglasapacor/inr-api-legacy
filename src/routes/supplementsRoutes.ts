import express from "express"
import wrapper from "../lib/wrapper"
import SupplementsService from "../cases/services/Supplements"
import SupplementsController from "../cases/controllers/Supplements"
import SupplementsRepository from "../cases/repositories/Supplements"
import TemasRepository from "../cases/repositories/Temas"

const supplementsRoutes = express.Router()

const supplementsRepository = new SupplementsRepository()
const temasRepository = new TemasRepository()
const supplementsService = new SupplementsService(
  supplementsRepository,
  temasRepository
)
const supplementsController = new SupplementsController(supplementsService)

supplementsRoutes.get(
  "/themes/list",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(await supplementsController.getSupplementsThemes())
      next()
    },
    settings: {
      level: "free"
    }
  })
)

supplementsRoutes.get(
  "/",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await supplementsController.supplementsContent({
          themeId: req.query.theme ? +req.query.theme : 1,
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

supplementsRoutes.get(
  "/:id",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await supplementsController.supplementsById({
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

export default supplementsRoutes
