import { z } from "zod"
export const opnionByIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  }),
  client: z.number({
    message: "O parametro client é obrigatório e deve ser um número."
  })
})

export type opnionByIdControllerProps = z.input<typeof opnionByIdValidation>
export type opnionByIdServiceProps = z.output<typeof opnionByIdValidation>
