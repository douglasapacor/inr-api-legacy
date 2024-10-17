import {
  storiesTradeByIdControllerProps,
  storiesTradeByIdValidation
} from "../schemas/storiesTradeById"
import {
  storiesTradeHomeControllerProps,
  storiesTradeHomeValidation
} from "../schemas/storiesTradeHome"
import StoriesTradeService from "../services/storiesTrade"
import { defaultResponse } from "../types"

export default class StoriesTradeController {
  constructor(private storiesTradeService: StoriesTradeService) {}

  async storiesTradeContent(
    params: storiesTradeHomeControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await storiesTradeHomeValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.storiesTradeService.storiesTradeContent(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getStoriesTradeById(
    params: storiesTradeByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await storiesTradeByIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.storiesTradeService.getStoriesTradeById(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
