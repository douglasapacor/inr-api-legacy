import { legislationByIdServiceProps } from "../schemas/LegislationById"
import { legislationHomeServiceProps } from "../schemas/LegislationHome"
import { defaultResponse } from "../types"

export default class LegislationService {
  constructor() {}

  async legislationContent(
    params: legislationHomeServiceProps
  ): Promise<defaultResponse> {
    try {
      return {
        success: true
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getLegislationById(
    params: legislationByIdServiceProps
  ): Promise<defaultResponse> {
    try {
      return {
        success: true
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
