import { z } from "zod"
export const authenticationValidation = z.object({
  login: z.string(),
  senha: z.string()
})

export type authenticationControllerProps = z.input<
  typeof authenticationValidation
>

export type authenticationServiceProps = z.output<
  typeof authenticationValidation
>
