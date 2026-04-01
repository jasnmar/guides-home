import { defineCollection } from "astro:content"
import { file } from "astro/loaders"
import { boardDataSchema } from "./content-schemas"

const boardData = defineCollection({
  loader: file("src/data/boardData.json"),
  schema: boardDataSchema,
})

export const collections = { boardData }
