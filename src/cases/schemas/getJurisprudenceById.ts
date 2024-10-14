import { z } from "zod"
export const getJurisprudenceByIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  }),
  client: z.number({
    message: "O parametro client é obrigatório e deve ser um número."
  })
})

export type getJurisprudenceByIdControllerProps = z.input<
  typeof getJurisprudenceByIdValidation
>
export type getJurisprudenceByIdServiceProps = z.output<
  typeof getJurisprudenceByIdValidation
>
