import { Repository } from "../types"

export default class ClassifiersRepository extends Repository {
  async getStateClassifiers(params: { silga: string }): Promise<{
    idestado: number
    titulo: string
    banner: string
  } | null> {
    try {
      return await this.procedure<{
        idestado: number
        titulo: string
        banner: string
      }>("get_state_classifiers", `'${params.silga}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getClassifiersByState(params: {
    idestado: number
    limit: number
    page: number
  }): Promise<
    {
      id: number
      datacad: string
      data_ordem: string
    }[]
  > {
    try {
      return await this.many<{
        id: number
        datacad: string
        data_ordem: string
      }>(
        "get_classifiers_by_id_state",
        `'${params.idestado}'`,
        `'${params.limit}'`,
        `'${params.page}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
