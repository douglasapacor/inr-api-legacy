import { Repository } from "../types"

export default class UserRepository extends Repository {
  async getSalt(params: {
    login: string
  }): Promise<{ idusuario: number; idstatus_cliente: number } | null> {
    try {
      return await this.procedure<{
        idusuario: number
        idstatus_cliente: number
      }>("get_salt", `'${params.login}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getConfirmation(params: { email: string; senha: string }): Promise<{
    idcliente: number
    idstatus_cliente: number
    idusuario: number
    nome: string
    idgrupo_site: number
    autorizacao_trabalhista: string
    admin: string
    ultimo_login: Date
    login_antigo: string
    email_antigo: string
  } | null> {
    try {
      return await this.procedure<{
        idcliente: number
        idstatus_cliente: number
        idusuario: number
        nome: string
        idgrupo_site: number
        autorizacao_trabalhista: string
        admin: string
        ultimo_login: Date
        login_antigo: string
        email_antigo: string
      }>("get_user_confirmation", `'${params.email}'`, `'${params.senha}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getOldConfirmation(params: { email: string; senha: string }): Promise<{
    idcliente: number
    idstatus_cliente: number
    idusuario: number
    nome: string
    idgrupo_site: number
    autorizacao_trabalhista: string
    admin: string
    ultimo_login: Date
    login_antigo: string
    email_antigo: string
  } | null> {
    try {
      return await this.procedure<{
        idcliente: number
        idstatus_cliente: number
        idusuario: number
        nome: string
        idgrupo_site: number
        autorizacao_trabalhista: string
        admin: string
        ultimo_login: Date
        login_antigo: string
        email_antigo: string
      }>("get_old_user_confirmation", `'${params.email}'`, `'${params.senha}'`)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
