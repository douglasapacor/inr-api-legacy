import express from "express"
import MessagesEditorsService from "../cases/services/MessagesEditors"
import MessagesEditorsController from "../cases/controllers/MessagesEditors"
import wrapper from "../lib/wrapper"
import MessagesEditorRepository from "../cases/repositories/MessagesEditor"
const messagesEditorsRoute = express.Router()
const messagesEditorRepository = new MessagesEditorRepository()
const messagesEditorsService = new MessagesEditorsService(
  messagesEditorRepository
)
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

export default messagesEditorsRoute
