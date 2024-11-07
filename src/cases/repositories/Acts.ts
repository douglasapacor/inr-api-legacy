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
}
