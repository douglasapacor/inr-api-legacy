import {
  getClassifiersByIdControllerProps,
  getClassifiersByIdValidation
} from "../schemas/getClassifiersById"
import {
  getClassifiersByStateIdControllerProps,
  getClassifiersByStateIdValidation
} from "../schemas/getClassifiersByStateId"
import {
  stateByTitleControllerProps,
  stateByTitleValidation
} from "../schemas/stateByTitle"
import ClassifiersService from "../services/Classifiers"
import { defaultResponse } from "../types"

export default class ClassifiersController {
  constructor(private classifiersService: ClassifiersService) {}

  async getStateByTitle(
    params: stateByTitleControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await stateByTitleValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.classifiersService.getStateByTitle(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getClassifiersHome(
    params: getClassifiersByStateIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await getClassifiersByStateIdValidation.safeParseAsync(
        params
      )

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.classifiersService.getClassifiersHome(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getClassifiersById(
    params: getClassifiersByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await getClassifiersByIdValidation.safeParseAsync(
        params
      )

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.classifiersService.getClassifiersById(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
