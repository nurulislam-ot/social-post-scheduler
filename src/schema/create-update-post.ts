import { z } from "zod"
import { PostSchema } from "./post.schema"
import { SCHEDULE_TYPE_CONSTANT } from "../types/post"

export const CreateUpdatePostSchema = z.object({
  isEditMode: z.boolean().optional(),
  posts: z.array(PostSchema),
  schedule_type: z.nativeEnum(SCHEDULE_TYPE_CONSTANT).nullable(),
  scheduled_time: z.string().nullable(),
})

export type CreateUpdatePostType = z.infer<typeof CreateUpdatePostSchema>
