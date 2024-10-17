import { z } from "zod"
export const pareceresHomeValidation = z.object({
  page: z.number({
    message: "O parametro page é obrigatório e deve ser um número."
  }),
  limit: z.number({
    message: "O parametro limit é obrigatório e deve ser um número."
  })
})

export type pareceresHomeControllerProps = z.input<
  typeof pareceresHomeValidation
>
export type pareceresHomeServiceProps = z.output<typeof pareceresHomeValidation>
