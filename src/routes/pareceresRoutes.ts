import express from "express"
import PareceresService from "../cases/services/Pareceres"
import PareceresController from "../cases/controllers/Pareceres"
import wrapper from "../lib/wrapper"
const pareceresRouter = express.Router()
const pareceresService = new PareceresService()
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
export default pareceresRouter
