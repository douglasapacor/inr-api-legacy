import { z } from "zod"

export const supplementsHomeValidation = z.object({
  themeId: z.number({
    message: "O parametro themeId é obrigatório e deve ser um número."
  }),
  page: z.number({
    message: "O parametro page é obrigatório e deve ser um número."
  }),
  limit: z.number({
    message: "O parametro limit é obrigatório e deve ser um número."
  })
})

export type supplementsHomeControllerProps = z.input<
  typeof supplementsHomeValidation
>
export type supplementsHomeServiceProps = z.output<
  typeof supplementsHomeValidation
>
