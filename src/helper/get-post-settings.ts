import { FACEBOOK_POST_AS_CONSTANT } from "@/constant/facebook"
import { TIKTOK_PRIVACY_STATUS_CONSTANT } from "@/constant/tiktok"
import {
  YOUTUBE_POST_AS_CONSTANT,
  YOUTUBE_VISIBILITY_CONSTANT,
} from "@/constant/youtube"
import type { CreateUpdatePostSettings } from "@/schema/create-update-post"
import { POST_ON_CONSTANT, type POST_ON } from "@/types/post"

export default function get_post_settings(
  platform: POST_ON
): CreateUpdatePostSettings {
  const postSettingsByPlatform: Record<POST_ON, CreateUpdatePostSettings> = {
    [POST_ON_CONSTANT.FACEBOOK]: {
      post_as: FACEBOOK_POST_AS_CONSTANT.POST,
    },
    [POST_ON_CONSTANT.YOUTUBE]: {
      title: "",
      post_as: YOUTUBE_POST_AS_CONSTANT.VIDEO,
      privacy_status: YOUTUBE_VISIBILITY_CONSTANT.PUBLIC,
      made_for_kids: false,
    },
    [POST_ON_CONSTANT.TIKTOK]: {
      visibility: TIKTOK_PRIVACY_STATUS_CONSTANT.PUBLIC_TO_EVERYONE,
    },
    [POST_ON_CONSTANT.INSTAGRAM]: null,
    [POST_ON_CONSTANT.LINKEDIN]: null,
    [POST_ON_CONSTANT.TWITTER]: null,
    [POST_ON_CONSTANT.PINTEREST]: null,
    [POST_ON_CONSTANT.GMB]: {
      title: "",
      event: {
        schedule: {
          startDate: "",
          endDate: "",
          startTime: "",
          endTime: "",
        },
      },
      callToAction: null,
      topicType: "EVENT",
    },
    [POST_ON_CONSTANT.TUMBLR]: {
      title: "",
    },
  }

  return postSettingsByPlatform[platform]
}
