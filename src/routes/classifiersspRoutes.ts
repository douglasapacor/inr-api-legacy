import express from "express"
import ClassifiersSpService from "../cases/services/classifiersSp"
import ClassifiersSpController from "../cases/controllers/classifiersSp"
import wrapper from "../lib/wrapper"
const classifiersspRoute = express.Router()
const classifiersSpService = new ClassifiersSpService()
const classifiersSpController = new ClassifiersSpController(
  classifiersSpService
)

classifiersspRoute.get(
  "/",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersSpController.classifiersSpContent({
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

classifiersspRoute.get(
  "/:id",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersSpController.getClassifiersSpById({
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

export default classifiersspRoute
