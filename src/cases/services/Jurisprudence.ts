import ClientProductRepository from "../repositories/ClientProduct"
import JurisprudenceRepository from "../repositories/Jurisprudence"
import {
  getJurisprudenceByIdControllerProps,
  getJurisprudenceByIdServiceProps
} from "../schemas/getJurisprudenceById"
import { jurisprudenceHomeServiceProps } from "../schemas/jurisprudenceHome"
import { defaultResponse } from "../types"

export default class JurisprudenceService {
  constructor(
    private jurisprudenceRepository: JurisprudenceRepository,
    private clinetProductRepository: ClientProductRepository
  ) {}

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
      const validation = await this.clinetProductRepository.getClientProduct({
        client: params.client,
        product: 1
      })

      if (!validation || validation.idproduto !== 1) {
        return {
          success: false,
          message: "Não autorizado"
        }
      }

      const response = await this.jurisprudenceRepository.getJurisprudenceById({
        id: params.id
      })

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
