import type { CreateUpdatePost } from "@/schema/create-update-post"
import { POST_STATUS_CONSTANT, type POST_ON } from "@/types/post"
import get_post_type from "./get-post-type"
import get_post_settings from "./get-post-settings"

export default function get_post_by_platform(
  platform: POST_ON,
  defaultValue?: Partial<CreateUpdatePost>
): CreateUpdatePost {
  return {
    channel_uid: defaultValue?.channel_uid || "",
    post_on: defaultValue?.post_on || platform,
    content: defaultValue?.content || "",
    media_urls: defaultValue?.media_urls || [],
    status: defaultValue?.status || POST_STATUS_CONSTANT.QUEUED,
    type: get_post_type(platform),
    settings: get_post_settings(platform),
  } as CreateUpdatePost
}
