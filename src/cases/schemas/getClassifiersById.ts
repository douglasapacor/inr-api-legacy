import { z } from "zod"
export const getClassifiersByIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  }),
  client: z.number().nullable()
})

export type getClassifiersByIdControllerProps = z.input<
  typeof getClassifiersByIdValidation
>
export type getClassifiersByIdServiceProps = z.output<
  typeof getClassifiersByIdValidation
>
