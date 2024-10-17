import express from "express"
import ClassifiersRsService from "../cases/services/classifiersRs"
import ClassifiersRsController from "../cases/controllers/classifiersRs"
import wrapper from "../lib/wrapper"
const classifiersrsRoute = express.Router()
const classifiersRsService = new ClassifiersRsService()
const classifiersRsController = new ClassifiersRsController(
  classifiersRsService
)

classifiersrsRoute.get(
  "/",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersRsController.classifiersRsContent({
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

classifiersrsRoute.get(
  "/:id",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersRsController.getClassifiersRsById({
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

export default classifiersrsRoute
