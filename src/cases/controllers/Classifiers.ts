import {
  getClassifiersIndexByIdControllerProps,
  getClassifiersIndexByIdValidation
} from "../schemas/getClassifiersIndexById"
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
import {
  getClassifiersContentByIdControllerProps,
  getClassifiersContentByIdValidation
} from "../schemas/getClassifiersContentById"

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

  async getClassifiersIndexById(
    params: getClassifiersIndexByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await getClassifiersIndexByIdValidation.safeParseAsync(
        params
      )

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.classifiersService.getClassifiersIndexById(
        validation.data
      )
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getClassifiersBars(
    params: getClassifiersContentByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation =
        await getClassifiersContentByIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.classifiersService.getBarsByClassifierId(
        validation.data
      )
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getClassifierOrgan(
    params: getClassifiersContentByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation =
        await getClassifiersContentByIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.classifiersService.getOrgansByBarId(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getClassifierDepartament(
    params: getClassifiersContentByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation =
        await getClassifiersContentByIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.classifiersService.getDepartamentByOrganId(
        validation.data
      )
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getClassifierAct(
    params: getClassifiersContentByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation =
        await getClassifiersContentByIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.classifiersService.getActsByDepartamentId(
        validation.data
      )
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getClassifierContent(
    params: getClassifiersContentByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation =
        await getClassifiersContentByIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.classifiersService.getActText(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
