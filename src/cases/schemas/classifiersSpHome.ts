import { z } from "zod"
export const classifiersSpHomeValidation = z.object({
  page: z.number({
    message: "O parametro page é obrigatório e deve ser um número."
  }),
  limit: z.number({
    message: "O parametro limit é obrigatório e deve ser um número."
  })
})

export type classifiersSpHomeControllerProps = z.input<
  typeof classifiersSpHomeValidation
>
export type classifiersSpHomeServiceProps = z.output<
  typeof classifiersSpHomeValidation
>
