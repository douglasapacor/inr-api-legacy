import { z } from "zod"
export const messagesEditorsHomeValidation = z.object({
  page: z.number({
    message: "O parametro page é obrigatório e deve ser um número."
  }),
  limit: z.number({
    message: "O parametro limit é obrigatório e deve ser um número."
  })
})

export type messagesEditorsHomeControllerProps = z.input<
  typeof messagesEditorsHomeValidation
>
export type messagesEditorsHomeServiceProps = z.output<
  typeof messagesEditorsHomeValidation
>
