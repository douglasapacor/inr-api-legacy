import { z } from "zod"

export const stateByTitleValidation = z.object({
  state: z.union([z.literal("SP"), z.literal("PR"), z.literal("RS")], {
    message: "state needs to be 'SP', 'PR' or 'RS'"
  })
})

export type stateByTitleControllerProps = z.input<typeof stateByTitleValidation>
export type stateByTitleServiceProps = z.output<typeof stateByTitleValidation>
