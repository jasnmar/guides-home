import { z } from "astro:content"

export const boardBulletsType = z
  .array(
    z.object({
      data: z.string(),
      image: z.string().optional(),
    })
  )
  .optional()

export const boardDataSchema = z.object({
  id: z.number(),
  index: z.number(),
  boardName: z.string(),
  address: z.string(),
  linkImage: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  prevPage: z.string(),
  nextPage: z.string(),
  layouts: z.array(
    z.object({
      position: z.string(),
      border: z.boolean().optional(),
      components: z.array(
        z.object({
          displayType: z.enum(["smallLead", "largeLead", "aside"]),
          large: z.string().optional(),
          small: z.string().optional(),
          bullets: boardBulletsType,
          image: z.string().optional(),
        })
      ),
    })
  ),
})

export type BoardData = z.infer<typeof boardDataSchema>
