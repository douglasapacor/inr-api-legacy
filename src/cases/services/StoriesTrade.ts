import { storiesTradeByIdServiceProps } from "../schemas/storiesTradeById"
import { storiesTradeHomeServiceProps } from "../schemas/storiesTradeHome"
import { defaultResponse } from "../types"

export default class StoriesTradeService {
  constructor() {}

  async storiesTradeContent(
    params: storiesTradeHomeServiceProps
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

  async getStoriesTradeById(
    params: storiesTradeByIdServiceProps
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
