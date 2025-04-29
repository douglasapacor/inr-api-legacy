import express from "express"
import ClassifiersController from "../cases/controllers/Classifiers"
import ActsRepository from "../cases/repositories/Acts"
import AttachmentRepository from "../cases/repositories/Attachment"
import BarRepository from "../cases/repositories/Bar"
import ClassifiersRepository from "../cases/repositories/Classifiers"
import ClientProductRepository from "../cases/repositories/ClientProduct"
import DepartamentRepository from "../cases/repositories/Departament"
import OrganRepository from "../cases/repositories/Organ"
import ClassifiersService from "../cases/services/Classifiers"
import wrapper from "../lib/wrapper"

const classifiersRoute = express.Router()

const classifiersRepository = new ClassifiersRepository()
const clientProductRepository = new ClientProductRepository()
const barRepository = new BarRepository()
const organRepository = new OrganRepository()
const departamentRepository = new DepartamentRepository()
const actsRepository = new ActsRepository()
const attachmentRepository = new AttachmentRepository()
const classifiersService = new ClassifiersService(
  classifiersRepository,
  clientProductRepository,
  barRepository,
  organRepository,
  departamentRepository,
  actsRepository,
  attachmentRepository
)
const classifiersController = new ClassifiersController(classifiersService)

classifiersRoute.get(
  "/state",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersController.getStateByTitle({
          state: req.query.acronym as "SP" | "PR" | "RS"
        })
      )
    },
    settings: {
      level: "free"
    }
  })
)

classifiersRoute.get(
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
    },
    settings: {
      level: "free"
    }
  })
)

classifiersRoute.get(
  "/:id(\\d+)",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersController.getClassifiersIndexById({
          id: +req.params.id
        })
      )
    },
    settings: {
      level: "free"
    }
  })
)

classifiersRoute.get(
  "/act-content",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersController.getClassifierContent({
          id: req.query.id ? +req.query.id : 0,
          client: req.user ? req.user.idcliente : null
        })
      )
    },
    settings: {
      level: "full"
    }
  })
)

classifiersRoute.get(
  "/previous-acts",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(await classifiersController.getPreviousActs())
    },
    settings: {
      level: "free"
    }
  })
)

classifiersRoute.get(
  "/previous-bars",
  wrapper({
    handle: async (req, res) => {
      res.status(200).json(
        await classifiersController.getBarPreviousActs({
          idAto: req.query.idAto ? +req.query.idAto : 0
        })
      )
    },
    settings: {
      level: "free"
    }
  })
)

export default classifiersRoute
