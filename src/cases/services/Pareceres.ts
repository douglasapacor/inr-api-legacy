import ClientProductRepository from "../repositories/ClientProduct"
import PareceresRepository from "../repositories/Pareceres"
import { pareceresByIdServiceProps } from "../schemas/pareceresById"
import { pareceresHomeServiceProps } from "../schemas/pareceresHome"
import { defaultResponse } from "../types"

export default class PareceresService {
  constructor(
    private pareceresRepository: PareceresRepository,
    private clientProductRepository: ClientProductRepository
  ) {}

  async pareceresContent(
    params: pareceresHomeServiceProps
  ): Promise<defaultResponse> {
    try {
      const response = await this.pareceresRepository.pareceresHome(params)

      let transporter = []

      for (let i = 0; i < response.length; i++) {
        transporter.push({
          id: response[i].id,
          label: "Pareceres",
          tipo: "pareceres",
          numero_processo: response[i].numero_processo,
          ano_processo: response[i].ano_processo,
          titulo: response[i].ementa,
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

  async getPareceresById(
    params: pareceresByIdServiceProps
  ): Promise<defaultResponse> {
    try {
      const parecer = await this.pareceresRepository.getPareceresById({
        id: params.id
      })

      if (!parecer) {
        return {
          success: false,
          message: "Parecer não encontrado."
        }
      }

      if (!params.client) {
        return {
          success: true,
          data: {
            id: parecer.id,
            label: "Pareceres",
            tipo: "pareceres",
            numero_processo: parecer.numero_processo,
            ano_processo: parecer.ano_processo,
            numero_parecer: parecer.numero_parecer,
            ano_parecer: parecer.ano_parecer,
            titulo: parecer.ementa
          }
        }
      } else {
        const validation = await this.clientProductRepository.getClientProduct({
          client: params.client,
          product: 2
        })

        if (!validation) {
          return {
            success: true,
            data: {
              id: parecer.id,
              label: "Pareceres",
              tipo: "pareceres",
              numero_processo: parecer.numero_processo,
              ano_processo: parecer.ano_processo,
              numero_parecer: parecer.numero_parecer,
              ano_parecer: parecer.ano_parecer,
              ementa: parecer.ementa
            }
          }
        } else {
          return {
            success: true,
            data: {
              id: parecer.id,
              label: "Pareceres",
              tipo: "pareceres",
              numero_processo: parecer.numero_processo,
              ano_processo: parecer.ano_processo,
              numero_parecer: parecer.numero_parecer,
              ano_parecer: parecer.ano_parecer,
              ementa: parecer.ementa,
              texto: parecer.texto
            }
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
