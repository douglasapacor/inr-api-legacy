import express from "express"
import wrapper from "../lib/wrapper"
import DescriptionController from "../cases/controllers/Description"
import DescriptionService from "../cases/services/Description"
import DescriptionRepository from "../cases/repositories/Description"
const descriptionRoute = express.Router()

const descriptionRepository = new DescriptionRepository()
const descriptionService = new DescriptionService(descriptionRepository)
const descriptionController = new DescriptionController(descriptionService)

descriptionRoute.get(
  "/:id",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await descriptionController.get({
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

export default descriptionRoute
