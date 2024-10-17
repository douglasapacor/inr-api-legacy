import { z } from "zod"
export const classifiersPrByIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  }),
  client: z.number({
    message: "O parametro client é obrigatório e deve ser um número."
  })
})

export type classifiersPrByIdControllerProps = z.input<
  typeof classifiersPrByIdValidation
>
export type classifiersPrByIdServiceProps = z.output<
  typeof classifiersPrByIdValidation
>
