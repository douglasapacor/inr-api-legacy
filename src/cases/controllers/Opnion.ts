import {
  opnionByIdControllerProps,
  opnionByIdValidation
} from "../schemas/opnionById"
import {
  opnionHomeControllerProps,
  opnionHomeValidation
} from "../schemas/opnionHome"
import OpinionService from "../services/Opnion"
import { defaultResponse } from "../types"

export default class OpinionController {
  constructor(private opinionService: OpinionService) {}

  async opinionContent(
    params: opnionHomeControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await opnionHomeValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.opinionService.opinionContent(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getOpinionById(
    params: opnionByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await opnionByIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.opinionService.opinionById(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
