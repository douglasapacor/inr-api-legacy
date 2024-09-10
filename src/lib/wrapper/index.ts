import type { NextFunction, Request, Response } from "express"
import type { attributes } from "./types"
import { verify } from "jsonwebtoken"
import application from "../../config/application"

export default function wrapper(attr: attributes) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      if (attr.settings.level === "free")
        return await attr.handle(req, res, next)

      if (!req.headers["authorization"]) throw new Error("Não autorizado")

      let user: typeof req.user | null = null

      try {
        user = verify(
          req.headers["authorization"],
          application.key
        ) as typeof req.user
      } catch (error: any) {
        throw new Error("Não autorizado")
      }

      if (!user) throw new Error("Não autorizado")

      req.user = user

      return await attr.handle(req, res, next)
    } catch (error: any) {
      res.status(200).json({
        success: false,
        message: error.message
      })
    }
  }
}
