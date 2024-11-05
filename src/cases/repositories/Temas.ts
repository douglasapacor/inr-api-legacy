import { Repository } from "../types"

export default class TemasRepository extends Repository {
  async getThemes(): Promise<{ idtema: number; titulo: string }[]> {
    try {
      return await this.many<{ idtema: number; titulo: string }>("get_temas")
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
