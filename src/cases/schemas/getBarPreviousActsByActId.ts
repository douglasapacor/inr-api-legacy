import { z } from "zod"
export const getBarPreviousActsByActIdValidation = z.object({
  idAto: z.number({
    message: "O parametro idAto é obrigatório e deve ser um número."
  })
})

export type getBarPreviousActsByActIdControllerProps = z.input<
  typeof getBarPreviousActsByActIdValidation
>
export type getBarPreviousActsByActIdServiceProps = z.output<
  typeof getBarPreviousActsByActIdValidation
>
