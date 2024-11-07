import ClientProductRepository from "../repositories/ClientProduct"
import JurisprudenceRepository from "../repositories/Jurisprudence"
import {
  getJurisprudenceByIdServiceProps
} from "../schemas/getJurisprudenceById"
import { jurisprudenceHomeServiceProps } from "../schemas/jurisprudenceHome"
import { defaultResponse } from "../types"

export default class JurisprudenceService {
  constructor(
    private jurisprudenceRepository: JurisprudenceRepository,
    private clientProductRepository: ClientProductRepository
  ) { }

  async jurisprudenceContent(
    params: jurisprudenceHomeServiceProps
  ): Promise<defaultResponse> {
    try {
      const response = await this.jurisprudenceRepository.jurisprudenceHome(
        params
      )

      let transporter = []

      for (let i = 0; i < response.length; i++) {
        transporter.push({
          id: response[i].id,
          label: "Jurisprudência",
          tipo: "jurisprudence",
          titulo: response[i].titulo,
          ementa: response[i].ementa,
          img: response[i].img,
          datacad: response[i].datacad
        })
      }

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

      const response = await this.jurisprudenceRepository.getJurisprudenceById({
        id: params.id
      })

      if (!response) throw new Error("Jurisprudência não encontrada.")

      return {
        success: true,
        data: {
          id: response.id,
          label: "Jurisprudência",
          tipo: "jurisprudence",
          titulo: response.titulo,
          ementa: response.ementa,
          resumo: response.resumo,
          ato: response.ato,
          comentario: response.comentario,
          numero_ato: response.numero_ato,
          dados_processo: response.dados_processo,
          inteiro_teor: response.inteiro_teor,
          datacad: response.datacad
        }
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
