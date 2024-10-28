import { Repository } from "../types"

export default class MessagesEditorRepository extends Repository {
  async getMessagesEditor(params: {
    limit: number
    page: number
  }): Promise<{ id: number; titulo: string; datacad: string }[]> {
    try {
      return await this.many<{ id: number; titulo: string; datacad: string }>(
        "get_messages_editors_home",
        `'${params.limit}'`,
        `'${params.page * params.limit}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getMessagesEditorById(params: { id: number }): Promise<{
    id: number
    titulo: string
    texto: string
    chamada: string
    aberto: string
    datacad: string
  } | null> {
    try {
      return await this.procedure<{
        id: number
        titulo: string
        texto: string
        chamada: string
        aberto: string
        datacad: string
      }>("get_messages_editors_home_by_id", `'${params.id}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
