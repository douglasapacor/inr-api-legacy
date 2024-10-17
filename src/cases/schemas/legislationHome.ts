import { z } from "zod"
export const legislationHomeValidation = z.object({
  page: z.number({
    message: "O parametro page é obrigatório e deve ser um número."
  }),
  limit: z.number({
    message: "O parametro limit é obrigatório e deve ser um número."
  })
})

export type legislationHomeControllerProps = z.input<
  typeof legislationHomeValidation
>
export type legislationHomeServiceProps = z.output<
  typeof legislationHomeValidation
>
