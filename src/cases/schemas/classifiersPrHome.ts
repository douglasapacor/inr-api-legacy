import { z } from "zod"
export const classifiersPrHomeValidation = z.object({
  page: z.number({
    message: "O parametro page é obrigatório e deve ser um número."
  }),
  limit: z.number({
    message: "O parametro limit é obrigatório e deve ser um número."
  })
})

export type classifiersPrHomeControllerProps = z.input<
  typeof classifiersPrHomeValidation
>
export type classifiersPrHomeServiceProps = z.output<
  typeof classifiersPrHomeValidation
>
