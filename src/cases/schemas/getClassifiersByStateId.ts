import { z } from "zod"
export const getClassifiersByStateIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  }),
  page: z.number({
    message: "O parametro page é obrigatório e deve ser um número."
  }),
  limit: z.number({
    message: "O parametro limit é obrigatório e deve ser um número."
  })
})

export type getClassifiersByStateIdControllerProps = z.input<
  typeof getClassifiersByStateIdValidation
>
export type getClassifiersByStateIdServiceProps = z.output<
  typeof getClassifiersByStateIdValidation
>
