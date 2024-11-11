import { stringify } from "querystring"
import ActsRepository from "../repositories/Acts"
import AttachmentRepository from "../repositories/Attachment"
import BarRepository from "../repositories/Bar"
import ClassifiersRepository from "../repositories/Classifiers"
import ClientProductRepository from "../repositories/ClientProduct"
import DepartamentRepository from "../repositories/Departament"
import OrganRepository from "../repositories/Organ"
import { getClassifiersByIdServiceProps } from "../schemas/getClassifiersIndexById"
import { getClassifiersByStateIdServiceProps } from "../schemas/getClassifiersByStateId"
import { stateByTitleServiceProps } from "../schemas/stateByTitle"
import { defaultResponse } from "../types"

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
    params: getClassifiersByIdServiceProps
  ): Promise<defaultResponse> {
    try {
      const classifier = await this.classifiersRepository.getById({
        idclassificador: params.id
      })

      if (!classifier) throw new Error("Classificador não encontrado.")

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

      let index: any = classifier
      index.barra = {}

      for (let i = 0; i < bars.length; i++) {
        index.barra[bars[i].idbarra] = {
          titulo: bars[i].titulo,
          img: bars[i].img,
          cor: bars[i].cor,
          ordem: bars[i].ordem,
          orgao: {}
        }

        for (let ii = 0; ii < organs.length; ii++) {
          index.barra[bars[i].idbarra].orgao[organs[ii].idbarra_orgao] = {
            titulo: organs[ii].titulo,
            departamento: {}
          }

          for (let iii = 0; iii < departaments.length; iii++) {
            index.barra[bars[i].idbarra].orgao[
              organs[ii].idbarra_orgao
            ].departamento[departaments[iii].iddepartamento] = {
              nome: departaments[iii].nome,
              atos: {}
            }

            for (let iv = 0; iv < acts.length; iv++) {
              index.barra[bars[i].idbarra].orgao[
                organs[ii].idbarra_orgao
              ].departamento[departaments[iii].iddepartamento].atos[
                acts[iv].idato
              ] = {
                iddepartamento: acts[iv].iddepartamento,
                titulo: acts[iv].titulo,
                ancora: acts[iv].ancora,
                secao: acts[iv].secao,
                especie: acts[iv].especie,
                numero: acts[iv].numero,
                vara: acts[iv].vara,
                comarca: acts[iv].comarca,
                datacad: acts[iv].datacad,
                anexos: {}
              }

              for (let v = 0; v < attachments.length; v++) {
                index.barra[bars[i].idbarra].orgao[
                  organs[ii].idbarra_orgao
                ].departamento[departaments[iii].iddepartamento].atos[
                  acts[iv].idato
                ].anexos[attachments[v].idanexo] = attachments
              }
            }
          }
        }
      }

      return {
        success: true,
        data: index
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getClassifiersContentById(
    params: getClassifiersByIdServiceProps
  ): Promise<defaultResponse> {
    try {
      const classifier = await this.classifiersRepository.getById({
        idclassificador: params.id
      })

      if (!classifier) throw new Error("Classificador não encontrado.")

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

        let content: any = classifier
        content.barra = {}

        for (let i = 0; i < bars.length; i++) {
          content.barra[bars[i].idbarra] = {
            titulo: bars[i].titulo,
            img: bars[i].img,
            cor: bars[i].cor,
            ordem: bars[i].ordem,
            orgao: {}
          }

          for (let ii = 0; ii < organs.length; ii++) {
            content.barra[bars[i].idbarra].orgao[organs[ii].idbarra_orgao] = {
              titulo: organs[ii].titulo,
              departamento: {}
            }

            for (let iii = 0; iii < departaments.length; iii++) {
              content.barra[bars[i].idbarra].orgao[
                organs[ii].idbarra_orgao
              ].departamento[departaments[iii].iddepartamento] = {
                nome: departaments[iii].nome,
                atos: {}
              }

              for (let iv = 0; iv < acts.length; iv++) {
                content.barra[bars[i].idbarra].orgao[
                  organs[ii].idbarra_orgao
                ].departamento[departaments[iii].iddepartamento].atos[
                  acts[iv].idato
                ] = {
                  iddepartamento: acts[iv].iddepartamento,
                  titulo: acts[iv].titulo,
                  texto: acts[iv].texto,
                  ancora: acts[iv].ancora,
                  secao: acts[iv].secao,
                  especie: acts[iv].especie,
                  numero: acts[iv].numero,
                  vara: acts[iv].vara,
                  comarca: acts[iv].comarca,
                  datacad: acts[iv].datacad,
                  anexos: {}
                }

                for (let v = 0; v < attachments.length; v++) {
                  content.barra[bars[i].idbarra].orgao[
                    organs[ii].idbarra_orgao
                  ].departamento[departaments[iii].iddepartamento].atos[
                    acts[iv].idato
                  ].anexos[attachments[v].idanexo] = attachments
                }
              }
            }
          }
        }

        return {
          success: true,
          data: content
        }
      } else {
        return {
          success: false,
          message: "Não Autorizado."
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
