import {
  POST_ON_CONSTANT,
  POST_TYPE_CONSTANT,
  type POST_ON,
  type POST_TYPE,
} from "@/types/post"

export default function get_post_type(platform: POST_ON): POST_TYPE {
  const postTypeByPlatform: Record<POST_ON, POST_TYPE> = {
    [POST_ON_CONSTANT.FACEBOOK]: POST_TYPE_CONSTANT.TEXT,
    [POST_ON_CONSTANT.INSTAGRAM]: POST_TYPE_CONSTANT.IMAGE,
    [POST_ON_CONSTANT.TIKTOK]: POST_TYPE_CONSTANT.VIDEO,
    [POST_ON_CONSTANT.YOUTUBE]: POST_TYPE_CONSTANT.VIDEO,
    [POST_ON_CONSTANT.LINKEDIN]: POST_TYPE_CONSTANT.TEXT,
    [POST_ON_CONSTANT.TWITTER]: POST_TYPE_CONSTANT.TEXT,
    [POST_ON_CONSTANT.PINTEREST]: POST_TYPE_CONSTANT.IMAGE,
    [POST_ON_CONSTANT.GMB]: POST_TYPE_CONSTANT.TEXT,
    [POST_ON_CONSTANT.TUMBLR]: POST_TYPE_CONSTANT.TEXT,
  }

  return postTypeByPlatform[platform]
}

export function get_post_type_from_media(
  media_urls: Array<{ path: string }> | null
): POST_TYPE {
  if (media_urls === null) return POST_TYPE_CONSTANT.TEXT
  if (media_urls.length === 0) {
    return POST_TYPE_CONSTANT.TEXT
  }
  const image_extensions = ["jpg", "jpeg", "png", "gif", "webp"]
  const video_extensions = ["mp4", "mov", "avi", "mkv"]

  let finalPostType: POST_TYPE = POST_TYPE_CONSTANT.TEXT

  for (const media of media_urls) {
    const extension = media.path.split(".").pop()?.toLowerCase()
    if (extension && image_extensions.includes(extension)) {
      finalPostType = POST_TYPE_CONSTANT.IMAGE
    } else if (extension && video_extensions.includes(extension)) {
      // If we find a video, we can return immediately as video takes precedence over image
      finalPostType = POST_TYPE_CONSTANT.VIDEO
      break
    }
  }

  return finalPostType
}
