import { getClassifiersByIdServiceProps } from "../schemas/getClassifiersById"
import { getClassifiersByStateIdServiceProps } from "../schemas/getClassifiersByStateId"
import { stateByTitleServiceProps } from "../schemas/stateByTitle"
import { defaultResponse } from "../types"

export default class ClassifiersService {
  constructor() {}

  async getStateByTitle(
    params: stateByTitleServiceProps
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

  async getClassifiersHome(
    params: getClassifiersByStateIdServiceProps
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

  async getClassifiersById(
    params: getClassifiersByIdServiceProps
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
