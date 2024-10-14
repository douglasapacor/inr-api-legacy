import { z } from "zod"
export const getNewsByIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  })
})

export type getNewsByIdControllerProps = z.input<typeof getNewsByIdValidation>
export type getNewsByIdServiceProps = z.output<typeof getNewsByIdValidation>
