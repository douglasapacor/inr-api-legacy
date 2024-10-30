import { z } from "zod"
export const descriptionByIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  })
})

export type descriptionByIdControllerProps = z.input<
  typeof descriptionByIdValidation
>
export type descriptionByIdServiceProps = z.output<
  typeof descriptionByIdValidation
>
