import express from "express"
import wrapper from "../lib/wrapper"
import NewsController from "../cases/controllers/News"
import NewsService from "../cases/services/News"
import NewsRepository from "../cases/repositories/News"
const newsRoute = express.Router()
const newsRepository = new NewsRepository()
const newsService = new NewsService(newsRepository)
const newsController = new NewsController(newsService)

newsRoute.get(
  "/",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await newsController.newsHome({
          page: req.query.page ? +req.query.page : 0,
          limit: req.query.limit ? +req.query.limit : 12
        })
      )

      next()
    },
    settings: {
      level: "free"
    }
  })
)

newsRoute.get(
  "/:id",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await newsController.getNewsById({
          id: +req.params.id
        })
      )

      next()
    },
    settings: {
      level: "free"
    }
  })
)

export default newsRoute
