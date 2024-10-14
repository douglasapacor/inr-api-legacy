import {
  getNewsByIdControllerProps,
  getNewsByIdValidation
} from "../schemas/getNewsById"
import {
  newsHomeControllerProps,
  newsHomeValidation
} from "../schemas/newsHome"
import NewsService from "../services/News"
import { defaultResponse } from "../types"

export default class NewsController {
  constructor(private newService: NewsService) {}

  async newsHome(params: newsHomeControllerProps): Promise<defaultResponse> {
    try {
      const validation = await newsHomeValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.newService.newsHome(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getNewsById(
    params: getNewsByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await getNewsByIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.newService.getNewsById(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
