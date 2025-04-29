//#region Imports
import { createHash } from "crypto"
import { sign } from "jsonwebtoken"
import application from "../../config/application"
import type UserRepository from "../repositories/User"
import type { authenticationServiceProps } from "../schemas/login"
import type { defaultResponse } from "../types"
//#endregion Imports

export default class UserService {
  constructor(private userRepository: UserRepository) {}

  async authentication(
    params: authenticationServiceProps
  ): Promise<defaultResponse> {
    try {
      const salt = await this.userRepository.getSalt({
        login: params.login
      })

      if (!salt)
        throw new Error("Não existe nenhum usuário cadastrado com esses dados.")

      if (salt.idstatus_cliente > 2)
        throw new Error(
          "Seu acesso encontra-se desativado. Entre em contato conosco para reativar."
        )

      const hash = createHash("sha1")
      const fullHash = createHash("sha1")

      hash.update(params.senha)
      fullHash.update(`${hash.digest("hex")}${salt.idusuario}`)

      const contentToSearch = fullHash.digest("hex")
      let userConfirmed = null

      userConfirmed = await this.userRepository.getConfirmation({
        email: params.login,
        senha: contentToSearch
      })

      if (!userConfirmed) {
        userConfirmed = await this.userRepository.getOldConfirmation({
          email: params.login,
          senha: contentToSearch
        })
      }

      if (!userConfirmed) throw new Error("A senha informada está incorreta.")

      const token = sign(
        JSON.stringify({
          idcliente: userConfirmed.idcliente,
          idusuario: userConfirmed.idusuario,
          idgrupo_site: userConfirmed.idgrupo_site,
          admin: userConfirmed.admin,
          autorizacao_trabalhista: userConfirmed.autorizacao_trabalhista
        }),
        application.key
      )

      return {
        success: true,
        data: {
          nome: userConfirmed.nome,
          credential: token
        }
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
