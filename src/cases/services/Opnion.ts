import { opnionByIdServiceProps } from "../schemas/opnionById"
import { opnionHomeServiceProps } from "../schemas/opnionHome"
import { defaultResponse } from "../types"

export default class OpinionService {
  constructor() {}

  async opinionContent(
    params: opnionHomeServiceProps
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

  async OpinionById(params: opnionByIdServiceProps): Promise<defaultResponse> {
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
