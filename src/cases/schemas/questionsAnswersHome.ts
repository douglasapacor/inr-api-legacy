import { z } from "zod"
export const questionsAnswersHomeValidation = z.object({
  page: z.number({
    message: "O parametro page é obrigatório e deve ser um número."
  }),
  limit: z.number({
    message: "O parametro limit é obrigatório e deve ser um número."
  })
})

export type questionsAnswersHomeControllerProps = z.input<
  typeof questionsAnswersHomeValidation
>
export type questionsAnswersHomeServiceProps = z.output<
  typeof questionsAnswersHomeValidation
>
