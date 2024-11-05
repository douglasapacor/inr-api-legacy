import { z } from "zod"

export const supplementsByIdValidation = z.object({
  id: z.number(),
  client: z.number().nullable()
})

export type supplementsByIdControllerProps = z.input<
  typeof supplementsByIdValidation
>
export type supplementsByIdServiceProps = z.output<
  typeof supplementsByIdValidation
>
