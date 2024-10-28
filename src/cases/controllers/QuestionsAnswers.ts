import {
  questionsAnswersByIdControllerProps,
  questionsAnswersByIdValidation
} from "../schemas/questionsAnswersById"
import {
  questionsAnswersHomeControllerProps,
  questionsAnswersHomeValidation
} from "../schemas/questionsAnswersHome"
import QuestionsAnswersService from "../services/QuestionsAnswers"
import { defaultResponse } from "../types"

export default class QuestionsAnswersController {
  constructor(private questionsAnswersService: QuestionsAnswersService) {}

  async questionsAnswersContent(
    params: questionsAnswersHomeControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await questionsAnswersHomeValidation.safeParseAsync(
        params
      )

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.questionsAnswersService.questionsAnswersContent(
        validation.data
      )
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getQuestionsAnswersById(
    params: questionsAnswersByIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await questionsAnswersByIdValidation.safeParseAsync(
        params
      )

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.questionsAnswersService.getQuestionsAnswersById(
        validation.data
      )
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
