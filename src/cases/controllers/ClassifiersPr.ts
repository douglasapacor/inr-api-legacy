import {
  classifiersPrByIdControllerProps,
  classifiersPrByIdValidation
} from "../schemas/ClassifiersPrById"
import {
  classifiersPrHomeControllerProps,
  classifiersPrHomeValidation
} from "../schemas/classifiersPrHome"
import ClassifiersPrService from "../services/classifiersPr"
import { defaultResponse } from "../types"

export default class ClassifiersPrController {
  constructor(private classifiersPrService: ClassifiersPrService) {}

  async classifiersPrContent(
    params: classifiersPrHomeControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await classifiersPrHomeValidation.safeParseAsync(
        params
      )

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.classifiersPrService.classifiersPrContent(
        validation.data
      )
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getClassifiersPrById(
    params: classifiersPrByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await classifiersPrByIdValidation.safeParseAsync(
        params
      )

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.classifiersPrService.getClassifiersPrById(
        validation.data
      )
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
