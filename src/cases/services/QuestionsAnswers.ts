import ClientProductRepository from "../repositories/ClientProduct"
import QuestionsAnswersRepository from "../repositories/QuestionsAnswers"
import { questionsAnswersByIdServiceProps } from "../schemas/questionsAnswersById"
import { questionsAnswersHomeServiceProps } from "../schemas/questionsAnswersHome"
import { defaultResponse } from "../types"

export default class QuestionsAnswersService {
  constructor(
    private questionsAnswersRepository: QuestionsAnswersRepository,
    private clinetProductRepository: ClientProductRepository
  ) {}

  async questionsAnswersContent(
    params: questionsAnswersHomeServiceProps
  ): Promise<defaultResponse> {
    try {
      const response =
        await this.questionsAnswersRepository.questionsAnswersHome(params)
      let transporter = []

      for (let i = 0; i < response.length; i++) {
        transporter.push({
          id: response[i].id,
          label: "Perguntas e Respostas",
          tipo: "questions-answers",
          titulo: response[i].titulo,
          numero_pergunta: response[i].numero_pergunta,
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

  async getQuestionsAnswersById(
    params: questionsAnswersByIdServiceProps
  ): Promise<defaultResponse> {
    try {
      if (params.client) {
        const validation = await this.clinetProductRepository.getClientProduct({
          client: params.client,
          product: 1
        })

        if (!validation || validation.idproduto !== 1) {
          return {
            success: false,
            message: "Não autorizado"
          }
        }

        const response =
          await this.questionsAnswersRepository.questionsAnswersById({
            id: params.id
          })

        if (!response) throw new Error("Pergunta e resposta não encontrada.")

        return {
          success: true,
          data: {
            id: response.id,
            label: "Perguntas e Respostas",
            tipo: "questions-answers",
            titulo: response.titulo,
            pergunta: response.pergunta,
            resposta: response.resposta,
            texto_parcial: response.texto_parcial,
            comentario: response.comentario,
            numero_pergunta: response.numero_pergunta,
            datacad: response.datacad
          }
        }
      } else {
        const freeResponse =
          await this.questionsAnswersRepository.questionsAnswersById({
            id: params.id
          })

        if (!freeResponse)
          throw new Error("Pergunta e Resposta não encontrada.")

        return {
          success: true,
          data: {
            id: freeResponse.id,
            label: "Perguntas e Respostas",
            tipo: "questions-answers",
            titulo: freeResponse.titulo,
            numero_pergunta: freeResponse.numero_pergunta,
            datacad: freeResponse.datacad,
            pergunta: freeResponse.pergunta,
            texto_parcial: freeResponse.texto_parcial
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
