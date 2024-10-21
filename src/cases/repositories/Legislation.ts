import { Repository } from "../types"

export default class LegislationRepository extends Repository {
  async legislationHome(params: { limit: number; page: number }): Promise<
    {
      id: number
      titulo: string
      resumo: string
      datacad: string
    }[]
  > {
    try {
      return await this.many<{
        id: number
        titulo: string
        resumo: string
        datacad: string
      }>(
        "get_home_legislation",
        `'${params.limit}'`,
        `'${params.page * params.limit}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getLegislationById(params: { id: number }): Promise<{
    id: number
    titulo: string
    resumo: string
    introducao: string
    comentario: string
    texto: string
    numero_ato: number
    anexo: string
    datacad: string
    destaque: string
  } | null> {
    try {
      return await this.procedure<{
        id: number
        titulo: string
        resumo: string
        introducao: string
        comentario: string
        texto: string
        numero_ato: number
        anexo: string
        datacad: string
        destaque: string
      }>("get_legislation_by_id", `'${params.id}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
