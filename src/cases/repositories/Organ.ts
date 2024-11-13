import { Repository } from "../types"

export default class OrganRepository extends Repository {
  async getOrgansByBars(params: {
    bars: number[]
  }): Promise<{ idbarra: number; idbarra_orgao: number; titulo: string }[]> {
    try {
      return await this.many<{
        idbarra: number
        idbarra_orgao: number
        titulo: string
      }>("get_organ_by_bars_id", `'${params.bars.toString()}'`)
    } catch (error: any) {
      throw new Error(`organ -:${error.message}`)
    }
  }

  async getOrganByBar(params: {
    bars: number
  }): Promise<{ idbarra_orgao: number; titulo: string }[]> {
    try {
      return await this.many<{
        idbarra_orgao: number
        titulo: string
      }>("get_organ_by_bar_id", `'${params.bars}'`)
    } catch (error: any) {
      throw new Error(`organ -: ${error.message}`)
    }
  }
}
