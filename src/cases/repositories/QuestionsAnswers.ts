import { Repository } from "../types"

export default class QuestionsAnswersRepository extends Repository {
  async questionsAnswersHome(params: { limit: number; page: number }): Promise<
    {
      id: number
      titulo: string
      numero_pergunta: string
      datacad: string
    }[]
  > {
    try {
      return await this.many<{
        id: number
        titulo: string
        numero_pergunta: string
        datacad: string
      }>(
        "get_questions_and_answers",
        `'${params.limit}'`,
        `'${params.page * params.limit}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async questionsAnswersById(params: { id: number }): Promise<{
    id: number
    titulo: string
    pergunta: string
    resposta: string
    texto_parcial: string
    comentario: string
    numero_pergunta: string
    datacad: string
  } | null> {
    try {
      return await this.procedure<{
        id: number
        titulo: string
        pergunta: string
        resposta: string
        texto_parcial: string
        comentario: string
        numero_pergunta: string
        datacad: string
      }>("get_question_and_answer_by_id", `'${params.id}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
