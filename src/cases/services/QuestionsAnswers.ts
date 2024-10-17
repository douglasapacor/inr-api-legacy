import { questionsAnswersByIdServiceProps } from "../schemas/questionsAnswersById"
import { questionsAnswersHomeServiceProps } from "../schemas/questionsAnswersHome"
import { defaultResponse } from "../types"

export default class QuestionsAnswersService {
  constructor() {}

  async questionsAnswersContent(
    params: questionsAnswersHomeServiceProps
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

  async getQuestionsAnswersById(
    params: questionsAnswersByIdServiceProps
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
