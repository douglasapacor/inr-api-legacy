import ClientProductRepository from "../repositories/ClientProduct"
import MessagesEditorRepository from "../repositories/MessagesEditor"
import { messagesEditorsByIdServiceProps } from "../schemas/messagesEditorsById"
import { messagesEditorsHomeServiceProps } from "../schemas/messagesEditorsHome"
import { defaultResponse } from "../types"

export default class MessagesEditorsService {
  constructor(private messagesEditorRepository: MessagesEditorRepository) {}

  async messagesEditorsContent(
    params: messagesEditorsHomeServiceProps
  ): Promise<defaultResponse> {
    try {
      const response = await this.messagesEditorRepository.getMessagesEditor(
        params
      )

      let transporter = []

      for (let i = 0; i < response.length; i++) {
        transporter.push({
          id: response[i].id,
          label: "Mensagens dos Editores",
          tipo: "messages-editors",
          titulo: response[i].titulo,
          datacad: response[i].datacad
        })
      }

      return {
        success: true,
        data: transporter
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getMessagesEditorsById(
    params: messagesEditorsByIdServiceProps
  ): Promise<defaultResponse> {
    try {
      const msg = await this.messagesEditorRepository.getMessagesEditorById({
        id: params.id
      })

      if (!msg) throw new Error("Mensagens dos Editores")

      if (params.client || msg.aberto === "S") {
        return {
          success: true,
          data: {
            id: msg.id,
            label: "Mensagens dos Editores",
            tipo: "messages-editors",
            titulo: msg.titulo,
            texto: msg.texto,
            datacad: msg.datacad
          }
        }
      } else {
        return {
          success: true,
          data: {
            id: msg.id,
            label: "Mensagens dos Editores",
            tipo: "messages-editors",
            titulo: msg.titulo,
            chamada: msg.chamada,
            datacad: msg.datacad
          }
        }
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
