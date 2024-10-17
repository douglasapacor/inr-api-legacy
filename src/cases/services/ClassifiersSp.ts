import { classifiersSpByIdServiceProps } from "../schemas/classifiersSpById"
import { classifiersSpHomeServiceProps } from "../schemas/classifiersSpHome"
import { defaultResponse } from "../types"

export default class ClassifiersSpService {
  constructor() {}

  async classifierSprContent(
    params: classifiersSpHomeServiceProps
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

  async getClassifiersSpById(
    params: classifiersSpByIdServiceProps
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
