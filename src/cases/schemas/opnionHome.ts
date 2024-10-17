import { z } from "zod"
export const opnionHomeValidation = z.object({
  page: z.number({
    message: "O parametro page é obrigatório e deve ser um número."
  }),
  limit: z.number({
    message: "O parametro limit é obrigatório e deve ser um número."
  })
})

export type opnionHomeControllerProps = z.input<typeof opnionHomeValidation>
export type opnionHomeServiceProps = z.output<typeof opnionHomeValidation>
