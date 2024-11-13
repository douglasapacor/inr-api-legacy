import express from "express"
import PareceresService from "../cases/services/Pareceres"
import PareceresController from "../cases/controllers/Pareceres"
import wrapper from "../lib/wrapper"
import PareceresRepository from "../cases/repositories/Pareceres"
import ClientProductRepository from "../cases/repositories/ClientProduct"
const pareceresRouter = express.Router()
const pareceresRepository = new PareceresRepository()
const clientProductRepository = new ClientProductRepository()
const pareceresService = new PareceresService(
  pareceresRepository,
  clientProductRepository
)
const pareceresController = new PareceresController(pareceresService)

pareceresRouter.get(
  "/",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await pareceresController.pareceresContent({
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

pareceresRouter.get(
  "/:id",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await pareceresController.getPareceresById({
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
export default pareceresRouter
