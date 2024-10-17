import express from "express"
import UserRepository from "../cases/repositories/User"
import UserService from "../cases/services/User"
import UserController from "../cases/controllers/User"
import wrapper from "../lib/wrapper"
const userRoute = express.Router()
const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const userController = new UserController(userService)

userRoute.post(
  "/authentication",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await userController.authentication({
          login: req.body.login,
          senha: req.body.senha
        })
      )
      next()
    },
    settings: {
      level: "free"
    }
  })
)

export default userRoute
