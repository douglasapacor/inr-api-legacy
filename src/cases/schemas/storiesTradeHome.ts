import { z } from "zod"
export const storiesTradeHomeValidation = z.object({
  page: z.number({
    message: "O parametro page é obrigatório e deve ser um número."
  }),
  limit: z.number({
    message: "O parametro limit é obrigatório e deve ser um número."
  })
})

export type storiesTradeHomeControllerProps = z.input<
  typeof storiesTradeHomeValidation
>

export type storiesTradeHomeServiceProps = z.output<
  typeof storiesTradeHomeValidation
>
