import { Repository } from "../types"

export default class DepartamentRepository extends Repository {
  async getDepartamentByOrgansId(params: { organs: number[] }): Promise<
    {
      idbarra_orgao: number
      iddepartamento: number
      nome: string
    }[]
  > {
    try {
      return await this.many<{
        idbarra_orgao: number
        iddepartamento: number
        nome: string
      }>("get_departament_by_organ_id", `'${params.organs}'`)
    } catch (error: any) {
      throw new Error(`departament -:${error.message}`)
    }
  }

  async getDepartamentByOrgan(params: { organ: number }): Promise<
    {
      iddepartamento: number
      nome: string
    }[]
  > {
    try {
      return await this.many<{
        iddepartamento: number
        nome: string
      }>("get_departament_by_organ", `'${params.organ}'`)
    } catch (error: any) {
      throw new Error(`departament -: ${error.message}`)
    }
  }
}
