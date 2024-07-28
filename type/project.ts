import { z } from "zod";

export const projectSchema = z.object({
  projectName: z.string(),
  category: z.enum(["Full stack", "Frontend", "Backend"]),
  stack: z.array(z.string()),
  image: z.string(),
  demo: z.string().optional(),
  repo: z.string().optional(),
});

export type ProjectSchemaType = z.infer<typeof projectSchema>;
