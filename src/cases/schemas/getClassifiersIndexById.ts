import { z } from "zod"
export const getClassifiersIndexByIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  })
})

export type getClassifiersIndexByIdControllerProps = z.input<
  typeof getClassifiersIndexByIdValidation
>

export type getClassifiersIndexByIdServiceProps = z.output<
  typeof getClassifiersIndexByIdValidation
>
