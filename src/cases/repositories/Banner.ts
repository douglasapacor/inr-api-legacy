import { Repository } from "../types"

export default class BannerRepository extends Repository {
  async getBanners(): Promise<
    {
      idbanner: number
      nome: string
      link: string
      img: string
      texto: string
    }[]
  > {
    try {
      try {
        return await this.many<{
          idbanner: number
          nome: string
          link: string
          img: string
          texto: string
        }>("get_all_banners")
      } catch (error: any) {
        throw new Error(error.message)
      }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
