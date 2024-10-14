import {
  getJurisprudenceByIdControllerProps,
  getJurisprudenceByIdValidation
} from "../schemas/getJurisprudenceById"
import {
  jurisprudenceHomeControllerProps,
  jurisprudenceHomeValidation
} from "../schemas/jurisprudenceHome"
import JurisprudenceService from "../services/Jurisprudence"
import { defaultResponse } from "../types"

export default class JurisprudenceController {
  constructor(private jurisprudenceService: JurisprudenceService) {}

  async jurisprudenceContent(
    params: jurisprudenceHomeControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await jurisprudenceHomeValidation.safeParseAsync(
        params
      )

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.jurisprudenceService.jurisprudenceContent(
        validation.data
      )
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getJurisprudenceById(
    params: getJurisprudenceByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await getJurisprudenceByIdValidation.safeParseAsync(
        params
      )

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.jurisprudenceService.getJurisprudenceById(
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
