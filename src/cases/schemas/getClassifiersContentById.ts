import { z } from "zod"
export const getClassifiersContentByIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  }),
  client: z.number().nullable()
})

export type getClassifiersContentByIdControllerProps = z.input<
  typeof getClassifiersContentByIdValidation
>

export type getClassifiersContentByIdServiceProps = z.output<
  typeof getClassifiersContentByIdValidation
>
