import { z } from "zod"
export const legislationByIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  }),
  client: z.number({
    message: "O parametro client é obrigatório e deve ser um número."
  })
})

export type legislationByIdControllerProps = z.input<
  typeof legislationByIdValidation
>
export type legislationByIdServiceProps = z.output<
  typeof legislationByIdValidation
>
