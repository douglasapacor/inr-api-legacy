import { z } from "zod"
export const newsHomeValidation = z.object({
  page: z.number({
    message: "O parametro page é obrigatório e deve ser um número."
  }),
  limit: z.number({
    message: "O parametro limit é obrigatório e deve ser um número."
  })
})

export type newsHomeControllerProps = z.input<typeof newsHomeValidation>
export type newsHomeServiceProps = z.output<typeof newsHomeValidation>
