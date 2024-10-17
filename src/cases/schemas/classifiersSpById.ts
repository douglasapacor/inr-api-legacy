import { z } from "zod"
export const classifiersSpByIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  }),
  client: z.number({
    message: "O parametro client é obrigatório e deve ser um número."
  })
})

export type classifiersSpByIdControllerProps = z.input<
  typeof classifiersSpByIdValidation
>
export type classifiersSpByIdServiceProps = z.output<
  typeof classifiersSpByIdValidation
>
