import { classifiersPrByIdServiceProps } from "../schemas/ClassifiersPrById"
import { classifiersPrHomeServiceProps } from "../schemas/classifiersPrHome"
import { defaultResponse } from "../types"

export default class ClassifiersPrService {
  constructor() {}

  async classifiersPrContent(
    params: classifiersPrHomeServiceProps
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

  async getClassifiersPrById(
    params: classifiersPrByIdServiceProps
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
