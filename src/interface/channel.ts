import type { POST_ON } from "@/types/post"

export interface GetAllSelectedChannelsResponse {
  getAllSelectedChannels: GetAllSelectedChannels
}

interface GetAllSelectedChannels {
  data: Channel[]
}

export interface Channel {
  uid: string
  platform: POST_ON
  channel_type: string
  name: string
  profile_image: string
  setting: null
}
