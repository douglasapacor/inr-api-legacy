import {
  authenticationValidation,
  type authenticationControllerProps
} from "../schemas/login"
import type UserService from "../services/User"
import type { defaultResponse } from "../types"

export default class UserController {
  constructor(private userService: UserService) {}

  async authentication(
    params: authenticationControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await authenticationValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.userService.authentication(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
