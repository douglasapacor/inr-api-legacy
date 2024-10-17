import {
  classifiersSpByIdControllerProps,
  classifiersSpByIdValidation
} from "../schemas/classifiersSpById"
import {
  classifiersSpHomeControllerProps,
  classifiersSpHomeValidation
} from "../schemas/classifiersSpHome"
import ClassifiersSpService from "../services/classifiersSp"
import { defaultResponse } from "../types"

export default class ClassifiersSpController {
  constructor(private classifiersSpService: ClassifiersSpService) {}

  async classifiersSpContent(
    params: classifiersSpHomeControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await classifiersSpHomeValidation.safeParseAsync(
        params
      )

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.classifiersSpService.classifierSprContent(
        validation.data
      )
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getClassifiersSpById(
    params: classifiersSpByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await classifiersSpByIdValidation.safeParseAsync(
        params
      )

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.classifiersSpService.getClassifiersSpById(
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
