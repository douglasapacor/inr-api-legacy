import express from "express"
import wrapper from "../lib/wrapper"
import HomeController from "../cases/controllers/Home"
import HomeService from "../cases/services/Home"
import LinkRepository from "../cases/repositories/Link"
import BannerRepository from "../cases/repositories/Banner"
import HomeRepository from "../cases/repositories/Home"

const homeRoute = express.Router()

const bannerRepository = new BannerRepository()
const linkRepository = new LinkRepository()
const homeRepository = new HomeRepository()

const homeService = new HomeService(
  bannerRepository,
  linkRepository,
  homeRepository
)

const homeController = new HomeController(homeService)

homeRoute.get(
  "/",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(await homeController.homeContent())
      next()
    },
    settings: {
      level: "free"
    }
  })
)

export default homeRoute
