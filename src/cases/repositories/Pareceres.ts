import { Repository } from "../types"

export default class PareceresRepository extends Repository {
  async pareceresHome(params: { limit: number; page: number }): Promise<
    {
      id: number
      numero_processo: string
      ano_processo: string
      ementa: string
      datacad: string
    }[]
  > {
    try {
      return await this.many<{
        id: number
        numero_processo: string
        ano_processo: string
        ementa: string
        datacad: string
      }>(
        "get_pareceres_home",
        `'${params.limit}'`,
        `'${params.page * params.limit}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getPareceresById(params: { id: number }): Promise<{
    id: number
    numero_processo: string
    ano_processo: string
    numero_parecer: string
    ano_parecer: string
    ementa: string
    texto: string
  } | null> {
    try {
      return await this.procedure<{
        id: number
        numero_processo: string
        ano_processo: string
        numero_parecer: string
        ano_parecer: string
        ementa: string
        texto: string
      }>("get_pareceres_by_id", `'${params.id}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
