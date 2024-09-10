import { Repository } from "../types"

export default class LinkRepository extends Repository {
  async getLinks(): Promise<
    {
      idlink: number
      tipo: string
      id: number
      ordem: number
    }[]
  > {
    try {
      return await this.many<{
        idlink: number
        tipo: string
        id: number
        ordem: number
      }>("get_all_links")
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
