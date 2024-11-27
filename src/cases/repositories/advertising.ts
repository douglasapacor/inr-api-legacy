import { Repository } from "../types"

export default class AdvertisingRepository extends Repository {
  async getAdvertising(): Promise<
    {
      idpublicidade: number
      texto: string
      ordem: number
    }[]
  > {
    try {
      return await this.many<{
        idpublicidade: number
        texto: string
        ordem: number
      }>("get_advertising")
    } catch (error: any) {
      throw new Error(`advertising -:${error.message}`)
    }
  }
}
