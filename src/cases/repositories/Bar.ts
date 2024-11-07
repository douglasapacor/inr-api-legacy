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
}
