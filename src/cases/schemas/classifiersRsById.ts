import { z } from "zod"
export const classifiersRsByIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  }),
  client: z.number({
    message: "O parametro client é obrigatório e deve ser um número."
  })
})

export type classifiersRsByIdControllerProps = z.input<
  typeof classifiersRsByIdValidation
>
export type classifiersRsByIdServiceProps = z.output<
  typeof classifiersRsByIdValidation
>
