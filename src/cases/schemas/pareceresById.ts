import { z } from "zod"
export const pareceresByIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  }),
  client: z.number().nullable()
})

export type pareceresByIdControllerProps = z.input<
  typeof pareceresByIdValidation
>
export type pareceresByIdServiceProps = z.output<typeof pareceresByIdValidation>
