import { Repository } from "../types"

export default class AttachmentRepository extends Repository {
  async getAttachmentByActsId(params: { acts: number[] }): Promise<
    {
      idato: number
      idanexo: number
      nome: string
      arquivo: string
    }[]
  > {
    try {
      return await this.many<{
        idato: number
        idanexo: number
        nome: string
        arquivo: string
      }>("get_attached_by_act", `'${params.acts}'`)
    } catch (error: any) {
      throw new Error(`attached -:${error.message}`)
    }
  }
}
