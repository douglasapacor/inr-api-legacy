import { Repository } from "../types"

export default class BarRepository extends Repository {
  async getBarByClassifiersId(params: { classifiersid: number }): Promise<
    {
      idbarra: number
      titulo: string
      img: string
      cor: string
      ordem: string
    }[]
  > {
    try {
      return await this.many<{
        idbarra: number
        titulo: string
        img: string
        cor: string
        ordem: string
      }>("get_barra_by_classifier_by_id", `${params.classifiersid}`)
    } catch (error: any) {
      throw new Error(`bar -:${error.message}`)
    }
  }

  async getBarPreviousActs(params: { idAto: number }): Promise<
    {
      idanexo: number
      idato: number
      barra_titulo: string
      img: string
      cor: string
      titulo: string
    }[]
  > {
    try {
      return await this.many<{
        idanexo: number
        idato: number
        barra_titulo: string
        img: string
        cor: string
        titulo: string
      }>("atos_anteriores_barras", `${params.idAto}`)
    } catch (error: any) {
      throw new Error(`bar -:${error.message}`)
    }
  }
}
