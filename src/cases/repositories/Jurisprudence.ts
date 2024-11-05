import { Repository } from "../types"

export default class JurisprudenceRepository extends Repository {
  async jurisprudenceHome(params: { limit: number; page: number }): Promise<
    {
      id: number
      titulo: string
      ementa: string
      img: string
      datacad: string
    }[]
  > {
    try {
      return await this.many<{
        id: number
        titulo: string
        ementa: string
        img: string
        datacad: string
      }>(
        "get_jurisprudence_home",
        `'${params.limit}'`,
        `'${params.page * params.limit}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getJurisprudenceById(params: { id: number }): Promise<{
    id: number
    titulo: string
    ementa: string
    resumo: string
    ato: string
    comentario: string
    numero_ato: string
    dados_processo: string
    inteiro_teor: string
    datacad: string
  } | null> {
    try {
      return await this.procedure<{
        id: number
        titulo: string
        ementa: string
        resumo: string
        ato: string
        comentario: string
        numero_ato: string
        dados_processo: string
        inteiro_teor: string
        datacad: string
      }>("get_jurisprudence_by_id", `'${params.id}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
