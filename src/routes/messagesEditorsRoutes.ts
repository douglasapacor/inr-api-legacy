import express from "express"
import MessagesEditorsService from "../cases/services/messagesEditors"
import MessagesEditorsController from "../cases/controllers/messagesEditors"
import wrapper from "../lib/wrapper"
const messagesEditorsRoute = express.Router()
const messagesEditorsService = new MessagesEditorsService()
const messagesEditorsController = new MessagesEditorsController(
  messagesEditorsService
)

messagesEditorsRoute.get(
  "/",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await messagesEditorsController.messagesEditorsContent({
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

messagesEditorsRoute.get(
  "/:id",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await messagesEditorsController.getMessagesEditorsById({
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
export default messagesEditorsRoute
