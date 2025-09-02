export const TIKTOK_PRIVACY_STATUS_CONSTANT: {
  PUBLIC_TO_EVERYONE: "PUBLIC_TO_EVERYONE"
  MUTUAL_FOLLOW_FRIENDS: "MUTUAL_FOLLOW_FRIENDS"
  FOLLOWER_OF_CREATOR: "FOLLOWER_OF_CREATOR"
  SELF_ONLY: "SELF_ONLY"
} = {
  PUBLIC_TO_EVERYONE: "PUBLIC_TO_EVERYONE",
  MUTUAL_FOLLOW_FRIENDS: "MUTUAL_FOLLOW_FRIENDS",
  FOLLOWER_OF_CREATOR: "FOLLOWER_OF_CREATOR",
  SELF_ONLY: "SELF_ONLY",
}

export const TIKTOK_PRIVACY_STATUS_OPTIONS = [
  {
    label: "Public",
    value: TIKTOK_PRIVACY_STATUS_CONSTANT.PUBLIC_TO_EVERYONE,
    description: "Anyone can view this video.",
  },
  {
    label: "Mutual Friends",
    value: TIKTOK_PRIVACY_STATUS_CONSTANT.MUTUAL_FOLLOW_FRIENDS,
    description: "Only mutual followers can view this video.",
  },
  {
    label: "Follower Only",
    value: TIKTOK_PRIVACY_STATUS_CONSTANT.FOLLOWER_OF_CREATOR,
    description: "Only followers of the creator can view this video.",
  },
  {
    label: "Only Me",
    value: TIKTOK_PRIVACY_STATUS_CONSTANT.SELF_ONLY,
    description: "Only you can view this video.",
  },
]

export const TIKTOK_DISCLOSER_CONSTANT = {
  BRAND_CONTENT_TOGGLE: "brand_content_toggle",
  BRAND_ORGANIC_TOGGLE: "brand_content_toggle",
}
