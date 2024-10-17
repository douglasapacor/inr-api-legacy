import { messagesEditorsByIdServiceProps } from "../schemas/MessagesEditorsById"
import { messagesEditorsHomeServiceProps } from "../schemas/MessagesEditorsHome"
import { defaultResponse } from "../types"

export default class MessagesEditorsService {
  constructor() {}

  async messagesEditorsContent(
    params: messagesEditorsHomeServiceProps
  ): Promise<defaultResponse> {
    try {
      return {
        success: true
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
      return {
        success: true
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
