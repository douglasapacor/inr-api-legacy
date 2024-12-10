import { Repository } from "../types"

export default class HomeRepository extends Repository {
  async getCO(
    itens: number[]
  ): Promise<{ id: number; titulo: string; img: string }[]> {
    try {
      return await this.many<{ id: number; titulo: string; img: string }>(
        "get_home_co",
        `'${itens.toString()}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getNO(
    itens: number[]
  ): Promise<{ id: number; titulo: string; img: string }[]> {
    try {
      return await this.many<{ id: number; titulo: string; img: string }>(
        "get_home_no",
        `'${itens.toString()}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getJR(
    itens: number[]
  ): Promise<{ id: number; titulo: string; img: string }[]> {
    try {
      return await this.many<{ id: number; titulo: string; img: string }>(
        "get_home_jr",
        `'${itens.toString()}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getLG(
    itens: number[]
  ): Promise<{ id: number; titulo: string; img: string }[]> {
    try {
      return await this.many<{ id: number; titulo: string; img: string }>(
        "get_home_lg",
        `'${itens.toString()}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getOP(
    itens: number[]
  ): Promise<{ id: number; titulo: string; img: string; nome: string }[]> {
    try {
      return await this.many<{
        id: number
        titulo: string
        img: string
        nome: string
      }>("get_home_op", `'${itens.toString()}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getPA(itens: number[]): Promise<
    {
      id: number
      titulo: string
      img: string
      numero_processo: string
      ano_processo: string
    }[]
  > {
    try {
      return await this.many<{
        id: number
        titulo: string
        img: string
        numero_processo: string
        ano_processo: string
      }>("get_home_pa", `'${itens.toString()}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getPR(
    itens: number[]
  ): Promise<{ id: number; titulo: string; img: string }[]> {
    try {
      return await this.many<{ id: number; titulo: string; img: string }>(
        "get_home_pr",
        `'${itens.toString()}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getME(
    itens: number[]
  ): Promise<{ id: number; titulo: string; img: string }[]> {
    try {
      return await this.many<{ id: number; titulo: string; img: string }>(
        "get_home_me",
        `'${itens.toString()}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getCLPR(
    itens: number[]
  ): Promise<{ id: number; titulo: string; img: string }[]> {
    try {
      return await this.many<{ id: number; titulo: string; img: string }>(
        "get_home_clpr",
        `'${itens.toString()}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getCLRS(
    itens: number[]
  ): Promise<{ id: number; titulo: string; img: string }[]> {
    try {
      return await this.many<{ id: number; titulo: string; img: string }>(
        "get_home_clrs",
        `'${itens.toString()}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getCLSP(
    itens: number[]
  ): Promise<{ id: number; titulo: string; img: string }[]> {
    try {
      return await this.many<{ id: number; titulo: string; img: string }>(
        "get_home_clsp",
        `'${itens.toString()}'`
      )
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getTV(itens: number[]): Promise<
    {
      id: number
      titulo: string
      img: string
      link: string
      numero_programa: number
    }[]
  > {
    try {
      return await this.many<{
        id: number
        titulo: string
        img: string
        link: string
        numero_programa: number
      }>("get_home_tv", `'${itens.toString()}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getHT(itens: number[]): Promise<
    {
      id: number
      titulo: string
      img: string
    }[]
  > {
    try {
      return await this.many<{
        id: number
        titulo: string
        img: string
      }>("get_home_ht", `'${itens.toString()}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getCurriculum(
    ids: number[]
  ): Promise<{ id: number; nome: string; img: string; conteudo: string }[]> {
    try {
      return await this.many<{
        id: number
        nome: string
        img: string
        conteudo: string
      }>("get_curriculum", `'${ids.toString()}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
