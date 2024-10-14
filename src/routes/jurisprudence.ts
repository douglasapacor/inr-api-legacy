import express from "express"
import wrapper from "../lib/wrapper"
import JurisprudenceController from "../cases/controllers/Jurisprudence"
import JurisprudenceService from "../cases/services/Jurisprudence"
import JurisprudenceRepository from "../cases/repositories/Jurisprudence"

const jurisprudenceRoute = express.Router()

const jurisprudenceRepository = new JurisprudenceRepository()
const jurisprudenceService = new JurisprudenceService(jurisprudenceRepository)
const jurisprudenceController = new JurisprudenceController(
  jurisprudenceService
)

jurisprudenceRoute.get(
  "/",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await jurisprudenceController.jurisprudenceContent({
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

jurisprudenceRoute.get(
  "/:id",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await jurisprudenceController.getJurisprudenceById({
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

export default jurisprudenceRoute
