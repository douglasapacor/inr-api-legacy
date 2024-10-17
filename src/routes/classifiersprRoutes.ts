import express from "express"
import ClassifiersPrService from "../cases/services/classifiersPr"
import ClassifiersPrController from "../cases/controllers/classifiersPr"
import wrapper from "../lib/wrapper"
const classifiersprRoute = express.Router()
const classifiersPrService = new ClassifiersPrService()
const classifiersPrController = new ClassifiersPrController(
  classifiersPrService
)

classifiersprRoute.get(
  "/",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersPrController.classifiersPrContent({
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

classifiersprRoute.get(
  "/:id",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersPrController.getClassifiersPrById({
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

export default classifiersprRoute
