import { z } from "zod"
export const messagesEditorsByIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  }),
  client: z.number({
    message: "O parametro client é obrigatório e deve ser um número."
  })
})

export type messagesEditorsByIdControllerProps = z.input<
  typeof messagesEditorsByIdValidation
>
export type messagesEditorsByIdServiceProps = z.output<
  typeof messagesEditorsByIdValidation
>
