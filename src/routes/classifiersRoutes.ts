import express from "express"
import wrapper from "../lib/wrapper"
import ClassifiersService from "../cases/services/Classifiers"
import ClassifiersController from "../cases/controllers/Classifiers"
const classifiersRoute = express.Router()
const classifiersService = new ClassifiersService()
const classifiersController = new ClassifiersController(classifiersService)

classifiersRoute.get(
  "/state",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersController.getStateByTitle({
          state: req.query.state as "SP" | "PR" | "RS"
        })
      )

      next()
    },
    settings: {
      level: "free"
    }
  })
)

classifiersRoute.post(
  "/",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersController.getClassifiersHome({
          id: req.query.id ? +req.query.id : 0,
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

classifiersRoute.post(
  "/:id",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersController.getClassifiersById({
          id: +req.params.id,
          client: req.user.idcliente
        })
      )

      next()
    },
    settings: {
      level: "free"
    }
  })
)

export default classifiersRoute
