import { stringify } from "querystring"
import ActsRepository from "../repositories/Acts"
import AttachmentRepository from "../repositories/Attachment"
import BarRepository from "../repositories/Bar"
import ClassifiersRepository from "../repositories/Classifiers"
import ClientProductRepository from "../repositories/ClientProduct"
import DepartamentRepository from "../repositories/Departament"
import OrganRepository from "../repositories/Organ"
import { getClassifiersIndexByIdServiceProps } from "../schemas/getClassifiersIndexById"
import { getClassifiersByStateIdServiceProps } from "../schemas/getClassifiersByStateId"
import { stateByTitleServiceProps } from "../schemas/stateByTitle"
import { defaultResponse } from "../types"
import { getClassifiersContentByIdServiceProps } from "../schemas/getClassifiersContentById"
import { getBarPreviousActsByActIdServiceProps } from "../schemas/getBarPreviousActsByActId"

export default class ClassifiersService {
  constructor(
    private classifiersRepository: ClassifiersRepository,
    private clientProductRepository: ClientProductRepository,
    private barsRepository: BarRepository,
    private organRepository: OrganRepository,
    private departamentRepository: DepartamentRepository,
    private actsRepository: ActsRepository,
    private attachmentRepository: AttachmentRepository
  ) {}

  async getStateByTitle(
    params: stateByTitleServiceProps
  ): Promise<defaultResponse> {
    try {
      const response = await this.classifiersRepository.getStateClassifiers({
        silga: params.state
      })

      if (!response) throw new Error("Estado não cadastrado.")

      return {
        success: true,
        data: response
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getClassifiersHome(
    params: getClassifiersByStateIdServiceProps
  ): Promise<defaultResponse> {
    try {
      const response = await this.classifiersRepository.getClassifiersByState({
        idestado: params.id,
        limit: params.limit,
        page: params.page
      })

      const state = await this.classifiersRepository.getClassifiersStateById({
        idestado: params.id
      })

      if (!state) throw new Error("Estado não encontrado.")

      let transporter = []

      for (let i = 0; i < response.length; i++) {
        transporter.push({
          id: response[i].id,
          label: `Classificadores INR ${state.titulo}`,
          tipo: `classifiers-${state.titulo}`,
          datacad: response[i].datacad,
          data_ordem: response[i].data_ordem
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

  async getClassifiersIndexById(
    params: getClassifiersIndexByIdServiceProps
  ): Promise<defaultResponse> {
    try {
      const classifier = await this.classifiersRepository.getById({
        idclassificador: params.id
      })

      if (!classifier) throw new Error("Classificador não encontrado.")

      let response: any = {}
      response.ids = {}

      const bars = await this.barsRepository.getBarByClassifiersId({
        classifiersid: params.id
      })

      if (bars.length <= 0)
        throw new Error("Erro ao selecionar Barra do classificador.")

      const barParams: number[] = []
      for (let i = 0; i < bars.length; i++) {
        barParams.push(bars[i].idbarra)
      }

      const organs = await this.organRepository.getOrgansByBars({
        bars: barParams
      })

      if (organs.length <= 0)
        throw new Error("Erro ao selecionar Orgãos do classificador.")

      const organsParams: number[] = []
      for (let i = 0; i < organs.length; i++) {
        organsParams.push(organs[i].idbarra_orgao)
      }

      const departaments =
        await this.departamentRepository.getDepartamentByOrgansId({
          organs: organsParams
        })

      if (departaments.length <= 0)
        throw new Error("Erro ao selecionar Departamentos do classificador.")

      const departamentParams: number[] = []
      for (let i = 0; i < departaments.length; i++) {
        departamentParams.push(departaments[i].iddepartamento)
      }

      const acts = await this.actsRepository.getActsByDepartamentsId({
        departaments: departamentParams
      })

      if (acts.length <= 0)
        throw new Error("Erro ao selecionar Atos do classificador.")

      const actsParams: number[] = []
      for (let i = 0; i < acts.length; i++) {
        actsParams.push(acts[i].idato)
      }

      const attachments = await this.attachmentRepository.getAttachmentByActsId(
        {
          acts: actsParams
        }
      )

      const barraArray = []

      for (const bar of bars) {
        const orgaoArray = []

        for (const organ of organs) {
          if (organ.idbarra === bar.idbarra) {
            const departamentoArray = []

            for (const departament of departaments) {
              if (departament.idbarra_orgao === organ.idbarra_orgao) {
                const atosArray = []

                for (const act of acts) {
                  if (act.iddepartamento === departament.iddepartamento) {
                    const anexosArray = attachments
                      .filter(attachment => attachment.idato === act.idato)
                      .map(attachment => ({
                        idato: attachment.idato,
                        idanexo: attachment.idanexo,
                        nome: attachment.nome,
                        arquivo: attachment.arquivo
                      }))

                    atosArray.push({
                      id: act.idato,
                      titulo: act.titulo,
                      ancora: act.ancora,
                      datacad: act.datacad,
                      secao: act.secao,
                      anexos: anexosArray
                    })

                    response.ids[act.idato] = {
                      secao: null,
                      especie: null,
                      numero: null,
                      vara: null,
                      comarca: null,
                      texto: null,
                      loading: false
                    }
                  }
                }

                departamentoArray.push({
                  id: departament.iddepartamento,
                  nome: departament.nome,
                  atos: atosArray
                })
              }
            }

            orgaoArray.push({
              id: organ.idbarra_orgao,
              titulo: organ.titulo,
              departamento: departamentoArray
            })
          }
        }

        barraArray.push({
          id: bar.idbarra,
          titulo: bar.titulo,
          cor: bar.cor,
          orgao: orgaoArray
        })
      }

      return {
        success: true,
        data: { ...response, barra: barraArray }
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getActText(
    params: getClassifiersContentByIdServiceProps
  ): Promise<defaultResponse> {
    try {
      if (params.client) {
        const validation = await this.clientProductRepository.getClientProduct({
          client: params.client,
          product: 1
        })

        if (!validation || validation.idproduto !== 1) {
          return {
            success: false,
            message: "Não Autorizado."
          }
        }

        const act = await this.actsRepository.getActText({
          act: params.id
        })

        if (!act) throw new Error("Ato não encontrado.")

        return {
          success: true,
          data: act
        }
      } else {
        return {
          success: true,
          data: {}
        }
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getPreviousActs(): Promise<defaultResponse> {
    try {
      const actsList = await this.actsRepository.getAllPreviousActs()
      return {
        success: true,
        data: actsList
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getBarPreviousActs(
    params: getBarPreviousActsByActIdServiceProps
  ): Promise<defaultResponse> {
    try {
      const barraList = await this.barsRepository.getBarPreviousActs(params)

      return {
        success: true,
        data: barraList
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
