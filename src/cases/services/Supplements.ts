// import ClientProductRepository from "../repositories/ClientProduct"
import SupplementsRepository from "../repositories/Supplements"
import TemasRepository from "../repositories/Temas"
import { supplementsByIdServiceProps } from "../schemas/supplementsById"
import { supplementsHomeServiceProps } from "../schemas/supplementsByTheme"
import { defaultResponse } from "../types"

export default class SupplementsService {
  constructor(
    private supplementsRepository: SupplementsRepository,
    private temasRepository: TemasRepository
  ) {}

  async getSupplementsThemes(): Promise<defaultResponse> {
    try {
      const temas = await this.temasRepository.getThemes()

      let threated = []

      for (let i = 0; i < temas.length; i++) {
        threated.push({
          id: temas[i].idtema,
          titulo: temas[i].titulo
        })
      }

      return {
        success: true,
        data: threated
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async supplementsContent(
    params: supplementsHomeServiceProps
  ): Promise<defaultResponse> {
    try {
      const response = await this.supplementsRepository.getSupplementsByTheme({
        idtheme: params.themeId,
        limit: params.limit,
        page: params.page
      })

      let transporter = []

      for (let i = 0; i < response.length; i++) {
        transporter.push({
          id: response[i].id,
          label: "Suplementos da Consultoria INR",
          tipo: "supplements",
          idtema: response[i].idtema,
          titulo: response[i].titulo,
          datacad: response[i].datacad_fmt
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

  async supplementsById(
    params: supplementsByIdServiceProps
  ): Promise<defaultResponse> {
    try {
      const response = await this.supplementsRepository.getSupplementsById({
        id: params.id
      })

      if (!response) throw new Error("Suplementa não encontrado.")

      if (params.client) {
        return {
          success: true,
          data: {
            id: response.id,
            label: "Suplementos da Consultoria INR",
            tipo: "supplements",
            titulo: response.titulo,
            introducao: response.introducao,
            texto: response.texto,
            comentario: response.comentario,
            datacad: response.datacad
          }
        }
      } else {
        return {
          success: true,
          data: {
            id: response.id,
            label: "Suplementos da Consultoria INR",
            tipo: "supplements",
            titulo: response.titulo,
            introducao: response.introducao
          }
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
