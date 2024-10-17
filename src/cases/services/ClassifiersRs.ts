import { classifiersRsByIdServiceProps } from "../schemas/classifiersRsById"
import { classifiersRsHomeServiceProps } from "../schemas/classifiersRsHome"
import { defaultResponse } from "../types"

export default class ClassifiersRsService {
  constructor() {}

  async classifiersRsContent(
    params: classifiersRsHomeServiceProps
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

  async getClassifiersRsById(
    params: classifiersRsByIdServiceProps
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
