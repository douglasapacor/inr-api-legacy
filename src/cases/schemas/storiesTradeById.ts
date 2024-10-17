import { z } from "zod"
export const storiesTradeByIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  }),
  client: z.number({
    message: "O parametro client é obrigatório e deve ser um número."
  })
})

export type storiesTradeByIdControllerProps = z.input<
  typeof storiesTradeByIdValidation
>
export type storiesTradeByIdServiceProps = z.output<
  typeof storiesTradeByIdValidation
>
