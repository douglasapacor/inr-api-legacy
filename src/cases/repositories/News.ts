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
}
