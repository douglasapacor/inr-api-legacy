import { Repository } from "../types"

export default class NewsRepository extends Repository {
  async getNews(params: { limit: number; page: number }): Promise<
    {
      idnoticia: number
      titulo: string
      fonte: string
      datacad: string
    }[]
  > {
    try {
      return await this.many<{
        idnoticia: number
        titulo: string
        fonte: string
        datacad: string
      }>(
        "get_news_home",
        `'${params.limit}'`,
        `'${params.page * params.limit}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getNewsById(params: { id: number }): Promise<{
    idnoticia: number
    titulo: string
    chamada: string
    fonte: string
    texto: string
    comentario: string
    datacad: string
  } | null> {
    try {
      return await this.procedure<{
        idnoticia: number
        titulo: string
        chamada: string
        fonte: string
        texto: string
        comentario: string
        datacad: string
      }>("get_news_by_id", `'${params.id}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
