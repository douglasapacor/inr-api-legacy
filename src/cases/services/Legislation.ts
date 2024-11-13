import ClientProductRepository from "../repositories/ClientProduct"
import LegislationRepository from "../repositories/Legislation"
import { legislationByIdServiceProps } from "../schemas/legislationById"
import { legislationHomeServiceProps } from "../schemas/legislationHome"
import { defaultResponse } from "../types"

export default class LegislationService {
  constructor(
    private legislationRepository: LegislationRepository,
    private clinetProductRepository: ClientProductRepository
  ) {}

  async legislationContent(
    params: legislationHomeServiceProps
  ): Promise<defaultResponse> {
    try {
      const response = await this.legislationRepository.legislationHome(params)

      let transporter = []

      for (let i = 0; i < response.length; i++) {
        transporter.push({
          id: response[i].id,
          label: "Legislação",
          tipo: "legislation",
          titulo: `${response[i].titulo} – ${response[i].resumo}`,
          datacad: response[i].datacad
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

  async getLegislationById(
    params: legislationByIdServiceProps
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

      const response = await this.legislationRepository.getLegislationById({
        id: params.id
      })

      if (!response) throw new Error("Legislação não encontrada.")

      return {
        success: true,
        data: {
          id: response.id,
          titulo: response.titulo,
          resumo: response.resumo,
          label: "Legislação",
          tipo: "legislation",
          introducao: response.introducao,
          comentario: response.comentario,
          texto: response.texto,
          numero_ato: response.numero_ato,
          anexo: response.anexo,
          datacad: response.datacad,
          destaque: response.destaque
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
