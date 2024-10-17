import { pareceresByIdServiceProps } from "../schemas/pareceresById"
import { pareceresHomeServiceProps } from "../schemas/pareceresHome"
import { defaultResponse } from "../types"

export default class PareceresService {
  constructor() {}

  async pareceresContent(
    params: pareceresHomeServiceProps
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

  async getPareceresById(
    params: pareceresByIdServiceProps
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
