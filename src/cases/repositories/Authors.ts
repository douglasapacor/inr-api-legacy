import { Repository } from "../types"

export default class AuthorsRepository extends Repository {
  async getAuthorsByIdOpinion(params: { id: number }): Promise<{
    foto: string
    nome: string
    curriculo: string
  } | null> {
    try {
      return await this.procedure<{
        foto: string
        nome: string
        curriculo: string
      }>("get_authors_by_opinion", `'${params.id}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
