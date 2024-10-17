import { z } from "zod"
export const classifiersRsHomeValidation = z.object({
  page: z.number({
    message: "O parametro page é obrigatório e deve ser um número."
  }),
  limit: z.number({
    message: "O parametro limit é obrigatório e deve ser um número."
  })
})

export type classifiersRsHomeControllerProps = z.input<
  typeof classifiersRsHomeValidation
>
export type classifiersRsHomeServiceProps = z.output<
  typeof classifiersRsHomeValidation
>
