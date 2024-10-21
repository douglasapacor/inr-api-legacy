import AuthorsRepository from "../repositories/Authors"
import ClientProductRepository from "../repositories/ClientProduct"
import OpinionRepository from "../repositories/Opnion"
import { opnionByIdServiceProps } from "../schemas/opnionById"
import { opnionHomeServiceProps } from "../schemas/opnionHome"
import { defaultResponse } from "../types"

export default class OpinionService {
  constructor(
    private opinionRepository: OpinionRepository,
    private clinetProductRepository: ClientProductRepository,
    private authorsRepository: AuthorsRepository
  ) {}

  async opinionContent(
    params: opnionHomeServiceProps
  ): Promise<defaultResponse> {
    try {
      const response = await this.opinionRepository.opinionHome(params)

      let transporter = []

      for (let i = 0; i < response.length; i++) {
        transporter.push({
          id: response[i].id,
          label: "Opnião",
          tipo: "opinion",
          titulo: response[i].titulo,
          resumo: response[i].resumo,
          data_registro: response[i].data_registro,
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

  async opinionById(params: opnionByIdServiceProps): Promise<defaultResponse> {
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

      const response = await this.opinionRepository.getOpinionById({
        id: params.id
      })

      if (!response) throw new Error("Opnião não encontrada.")

      const authors = await this.authorsRepository.getAuthorsByIdOpinion({
        id: response.id
      })

      return {
        success: true,
        data: {
          id: response.id,
          label: "Opnião",
          tipo: "opinion",
          titulo: response.titulo,
          texto: response.texto,
          introducao: response.introducao,
          img: response.img,
          comentario: response.comentario,
          datacad: response.datacad,
          autores: authors
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
