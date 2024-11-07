import ClassifiersRepository from "../repositories/Classifiers"
import ClientProductRepository from "../repositories/ClientProduct"
import { getClassifiersByIdServiceProps } from "../schemas/getClassifiersById"
import { getClassifiersByStateIdServiceProps } from "../schemas/getClassifiersByStateId"
import { stateByTitleServiceProps } from "../schemas/stateByTitle"
import { defaultResponse } from "../types"

export default class ClassifiersService {
  constructor(
    private classifiersRepository: ClassifiersRepository,
    private clientProductRepository: ClientProductRepository
  ) { }

  async getStateByTitle(
    params: stateByTitleServiceProps
  ): Promise<defaultResponse> {
    try {
      const response = await this.classifiersRepository.getStateClassifiers({ silga: params.state })

      if (!response) throw new Error("Estado não cadastrado.")

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

  async getClassifiersHome(
    params: getClassifiersByStateIdServiceProps
  ): Promise<defaultResponse> {
    try {
      const response = await this.classifiersRepository.getClassifiersByState({
        idestado: params.id, limit: params.limit, page: params.page
      })

      const state = await this.classifiersRepository.getClassifiersStateById({
        idestado: params.id
      })

      if (!state) throw new Error("Estado não encontrado.");

      let transporter = [];

      for (let i = 0; i < response.length; i++) {
        transporter.push({
          id: response[i].id,
          label: `Classificadores INR ${state.titulo}`,
          tipo: `classifiers-${state.titulo}`,
          datacad: response[i].datacad,
          data_ordem: response[i].data_ordem
        })
      }

      return {
        success: true,
        data: transporter
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
      if (params.client) {
        const validation = await this.clientProductRepository.getClientProduct({
          client: params.client,
          product: 1
        })

        if (!validation || validation.idproduto !== 1) {
          return {
            success: false,
            message: "Não autorizado"
          }
        }
      } else throw new Error("Não autorizado.");

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
