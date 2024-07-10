import { createClient } from "@sanity/client"

const projectId = "r8ht2kqh"
const dataset = "production"
const apiVersion = "2024-07-10"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
