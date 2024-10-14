import { z } from "zod"
export const jurisprudenceHomeValidation = z.object({
  page: z.number({
    message: "O parametro page é obrigatório e deve ser um número."
  }),
  limit: z.number({
    message: "O parametro limit é obrigatório e deve ser um número."
  })
})

export type jurisprudenceHomeControllerProps = z.input<
  typeof jurisprudenceHomeValidation
>
export type jurisprudenceHomeServiceProps = z.output<
  typeof jurisprudenceHomeValidation
>
