import JurisprudenceRepository from "../repositories/Jurisprudence"
import {
  getJurisprudenceByIdControllerProps,
  getJurisprudenceByIdServiceProps
} from "../schemas/getJurisprudenceById"
import { jurisprudenceHomeServiceProps } from "../schemas/jurisprudenceHome"
import { defaultResponse } from "../types"

export default class JurisprudenceService {
  constructor(private jurisprudenceRepository: JurisprudenceRepository) {}

  async jurisprudenceContent(
    params: jurisprudenceHomeServiceProps
  ): Promise<defaultResponse> {
    try {
      const response = await this.jurisprudenceRepository.jurisprudenceHome(
        params
      )
      return {
        success: true,
        data: response
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getJurisprudenceById(
    params: getJurisprudenceByIdServiceProps
  ): Promise<defaultResponse> {
    try {
      const response = await this.jurisprudenceRepository.getJurisprudenceById(
        params
      )
      return {
        success: true,
        data: response
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
