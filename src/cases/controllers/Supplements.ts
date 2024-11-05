import {
  supplementsByIdControllerProps,
  supplementsByIdValidation
} from "../schemas/supplementsById"
import {
  supplementsHomeControllerProps,
  supplementsHomeValidation
} from "../schemas/supplementsByTheme"
import SupplementsService from "../services/Supplements"
import { defaultResponse } from "../types"

export default class SupplementsController {
  constructor(private supplementsService: SupplementsService) {}

  async getSupplementsThemes(): Promise<defaultResponse> {
    try {
      return await this.supplementsService.getSupplementsThemes()
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async supplementsContent(
    params: supplementsHomeControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await supplementsHomeValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.supplementsService.supplementsContent(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async supplementsById(
    params: supplementsByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await supplementsByIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.supplementsService.supplementsById(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
