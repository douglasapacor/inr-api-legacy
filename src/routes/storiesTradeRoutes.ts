import express from "express"
import StoriesTradeService from "../cases/services/storiesTrade"
import StoriesTradeController from "../cases/controllers/storiesTrade"
import wrapper from "../lib/wrapper"
const storiesTradeRoute = express.Router()
const storiesTradeService = new StoriesTradeService()
const storiesTradeController = new StoriesTradeController(storiesTradeService)

storiesTradeRoute.get(
  "/",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await storiesTradeController.storiesTradeContent({
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

storiesTradeRoute.get(
  "/:id",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await storiesTradeController.getStoriesTradeById({
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
export default storiesTradeRoute
