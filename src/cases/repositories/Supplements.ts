import { Repository } from "../types"

export default class SupplementsRepository extends Repository {
  async getSupplementsByTheme(params: {
    idtheme: number
    limit: number
    page: number
  }): Promise<
    {
      id: number
      idtema: number
      titulo: string
      datacad: string
      datacad_fmt: string
    }[]
  > {
    try {
      return await this.many<{
        id: number
        idtema: number
        titulo: string
        datacad: string
        datacad_fmt: string
      }>(
        "get_supplements_by_theme_id",
        `'${params.idtheme}'`,
        `'${params.limit}'`,
        `'${params.page * params.limit}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getSupplementsById(params: { id: number }): Promise<{
    id: number
    titulo: string
    texto: string
    introducao: string
    comentario: string
    datacad: string
  } | null> {
    try {
      return await this.procedure<{
        id: number
        titulo: string
        texto: string
        introducao: string
        comentario: string
        datacad: string
      }>("get_supplements_by_id", `'${params.id}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
