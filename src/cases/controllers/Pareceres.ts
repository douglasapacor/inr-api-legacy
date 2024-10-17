import {
  pareceresByIdControllerProps,
  pareceresByIdValidation
} from "../schemas/pareceresById"
import {
  pareceresHomeControllerProps,
  pareceresHomeValidation
} from "../schemas/pareceresHome"
import PareceresService from "../services/Pareceres"
import { defaultResponse } from "../types"

export default class PareceresController {
  constructor(private pareceresService: PareceresService) {}

  async pareceresContent(
    params: pareceresHomeControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await pareceresHomeValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.pareceresService.pareceresContent(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getPareceresById(
    params: pareceresByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await pareceresByIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.pareceresService.getPareceresById(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
