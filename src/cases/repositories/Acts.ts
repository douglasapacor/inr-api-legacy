import { Repository } from "../types"

export default class ActsRepository extends Repository {
  async getActsByDepartamentsId(params: { departaments: number[] }): Promise<
    {
      iddepartamento: number
      idato: number
      titulo: string
      texto: string
      ancora: string
      secao: string
      especie: string
      numero: string
      vara: string
      comarca: string
      datacad: string
    }[]
  > {
    try {
      return await this.many<{
        iddepartamento: number
        idato: number
        titulo: string
        texto: string
        ancora: string
        secao: string
        especie: string
        numero: string
        vara: string
        comarca: string
        datacad: string
      }>("get_act_by_departament", `'${params.departaments}'`)
    } catch (error: any) {
      throw new Error(`act -:${error.message}`)
    }
  }

  async getActsByDepartamentId(params: { departament: number }): Promise<
    {
      idato: number
      titulo: string
      ancora: string
      secao: string
      especie: string
      numero: string
      vara: string
      comarca: string
      datacad: string
    }[]
  > {
    try {
      return await this.many<{
        idato: number
        titulo: string
        ancora: string
        secao: string
        especie: string
        numero: string
        vara: string
        comarca: string
        datacad: string
      }>("get_acts_by_departament_id", `'${params.departament}'`)
    } catch (error: any) {
      throw new Error(`act -: ${error.message}`)
    }
  }

  async getActText(params: { act: number }): Promise<{
    secao: string
    especie: string
    numero: string
    vara: string
    comarca: string
    texto: string
  } | null> {
    try {
      return await this.procedure<{
        secao: string
        especie: string
        numero: string
        vara: string
        comarca: string
        texto: string
      }>("get_acts_text", `'${params.act}'`)
    } catch (error: any) {
      throw new Error(`act -: ${error.message}`)
    }
  }

  async getAllPreviousActs(): Promise<
    {
      idato: number
      tipo: string
      ano: number
    }[]
  > {
    try {
      return await this.many<{
        idato: number
        tipo: string
        ano: number
      }>("get_all_previous_acts")
    } catch (error: any) {
      throw new Error(`repository -: ${error.message}`)
    }
  }
}
