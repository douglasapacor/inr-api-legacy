import express from "express"
import wrapper from "../lib/wrapper"
import ClassifiersService from "../cases/services/Classifiers"
import ClassifiersController from "../cases/controllers/Classifiers"
import ClassifiersRepository from "../cases/repositories/Classifiers"
import ClientProductRepository from "../cases/repositories/ClientProduct"
import BarRepository from "../cases/repositories/Bar"
import OrganRepository from "../cases/repositories/Organ"
import DepartamentRepository from "../cases/repositories/Departament"
import ActsRepository from "../cases/repositories/Acts"
import AttachmentRepository from "../cases/repositories/Attachment"
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
      next()
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
      next()
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
      next()
    },
    settings: {
      level: "free"
    }
  })
)

classifiersRoute.get(
  "/bars",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersController.getClassifiersBars({
          id: req.query.id ? +req.query.id : 0,
          client: req.user ? req.user.idcliente : null
        })
      )
      next()
    },
    settings: {
      level: "full"
    }
  })
)

classifiersRoute.get(
  "/organs",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersController.getClassifierOrgan({
          id: req.query.id ? +req.query.id : 0,
          client: req.user ? req.user.idcliente : null
        })
      )
      next()
    },
    settings: {
      level: "full"
    }
  })
)

classifiersRoute.get(
  "/departaments",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersController.getClassifierDepartament({
          id: req.query.id ? +req.query.id : 0,
          client: req.user ? req.user.idcliente : null
        })
      )
      next()
    },
    settings: {
      level: "full"
    }
  })
)

classifiersRoute.get(
  "/act",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await classifiersController.getClassifierAct({
          id: req.query.id ? +req.query.id : 0,
          client: req.user ? req.user.idcliente : null
        })
      )
      next()
    },
    settings: {
      level: "full"
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
      next()
    },
    settings: {
      level: "full"
    }
  })
)

export default classifiersRoute
