import {
  classifiersRsByIdControllerProps,
  classifiersRsByIdValidation
} from "../schemas/classifiersRsById"
import {
  classifiersRsHomeControllerProps,
  classifiersRsHomeValidation
} from "../schemas/classifiersRsHome"
import ClassifiersRsService from "../services/classifiersRs"
import { defaultResponse } from "../types"

export default class ClassifiersRsController {
  constructor(private classifiersRsService: ClassifiersRsService) {}

  async classifiersRsContent(
    params: classifiersRsHomeControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await classifiersRsHomeValidation.safeParseAsync(
        params
      )

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.classifiersRsService.classifiersRsContent(
        validation.data
      )
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getClassifiersRsById(
    params: classifiersRsByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await classifiersRsByIdValidation.safeParseAsync(
        params
      )

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.classifiersRsService.getClassifiersRsById(
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
