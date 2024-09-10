import type HomeService from "../services/Home"
import type { defaultResponse } from "../types"

export default class HomeController {
  constructor(private homeService: HomeService) {}

  async homeContent(): Promise<defaultResponse> {
    try {
      return await this.homeService.homeContent()
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
