import { Repository } from "../types"

export default class OpinionRepository extends Repository {
  async opinionHome(params: { limit: number; page: number }): Promise<
    {
      id: number
      titulo: string
      resumo: string
      data_registro: string
      datacad: string
    }[]
  > {
    try {
      return await this.many<{
        id: number
        titulo: string
        resumo: string
        data_registro: string
        datacad: string
      }>(
        "get_opinion_home",
        `'${params.limit}'`,
        `'${params.page * params.limit}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getOpinionById(params: { id: number }): Promise<{
    id: number
    titulo: string
    texto: string
    introducao: string
    img: string
    comentario: string
    datacad: string
  } | null> {
    try {
      return await this.procedure<{
        id: number
        titulo: string
        texto: string
        introducao: string
        img: string
        comentario: string
        datacad: string
      }>("get_opinion_by_id", `'${params.id}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
