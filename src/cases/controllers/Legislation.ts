import {
  legislationByIdControllerProps,
  legislationByIdValidation
} from "../schemas/legislationById"
import {
  legislationHomeControllerProps,
  legislationHomeValidation
} from "../schemas/legislationHome"
import LegislationService from "../services/Legislation"
import { defaultResponse } from "../types"

export default class LegislationController {
  constructor(private legislationService: LegislationService) {}

  async legislationContent(
    params: legislationHomeControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await legislationHomeValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.legislationService.legislationContent(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getLegislationById(
    params: legislationByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await legislationByIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.legislationService.getLegislationById(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
