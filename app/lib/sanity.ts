import { createClient } from "@sanity/client";

const projectId = "r8ht2kqh";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});