import FacebookIcon from "@/icons/facebook"
import InstagramIcon from "@/icons/instagram"
import LinkedInIcon from "@/icons/linkedin"
import PinterestIcon from "@/icons/pinterest"
import RedditIcon from "@/icons/reddit"
import SnapchatIcon from "@/icons/snapchat"
import TiktokIcon from "@/icons/tiktok"
import TwitterIcon from "@/icons/twitter"
import YoutubeIcon from "@/icons/youtube"
import { cn } from "@/lib/cn"
import { platformAtom, setActivePlatformAtom } from "@/store/platform"
import type { POST_ON } from "@/types/post"
import { useAtomValue, useSetAtom } from "jotai"
import type { JSX } from "react"

import get_post_by_platform from "@/helper/get-post"
import useFetchChannels from "@/hooks/gql/useFetchChannel"
import type { PostField } from "@/types/tanstack-post"
import { initialFormOptions, withForm } from "./form.option"

type Platform = {
  name: string
  type: POST_ON
  icon: JSX.Element
  channel_uid: string
}

const PLATFORMS = [
  {
    id: 1,
    name: "ফেসবুক",
    type: "FACEBOOK",
    icon: <FacebookIcon />,
  },
  {
    id: 2,
    name: "ইন্সটাগ্রাম",
    type: "INSTAGRAM",
    icon: <InstagramIcon />,
  },
  {
    id: 3,
    name: "টুইটার",
    type: "TWITTER",
    icon: <TwitterIcon />,
  },
  {
    id: 4,
    name: "লিঙ্কডইন",
    type: "LINKEDIN",
    icon: <LinkedInIcon />,
  },
  {
    id: 5,
    name: "স্ন্যাপচ্যাট",
    type: "SNAPCHAT",
    icon: <SnapchatIcon />,
  },
  {
    id: 6,
    name: "টিকটক",
    type: "TIKTOK",
    icon: <TiktokIcon />,
  },
  {
    id: 7,
    name: "পিন্টারেস্ট",
    type: "PINTEREST",
    icon: <PinterestIcon />,
  },
  {
    id: 8,
    name: "রেডিট",
    type: "REDDIT",
    icon: <RedditIcon />,
  },
  {
    id: 11,
    name: "ইউটিউব",
    type: "YOUTUBE",
    icon: <YoutubeIcon />,
  },
]

type PlatformSelectorSidebarProps = {
  form: PostField
}

function PlatformSelector({ form }: PlatformSelectorSidebarProps) {
  const { data } = useFetchChannels()
  const setActivePlatform = useSetAtom(setActivePlatformAtom)
  const { activePlatform } = useAtomValue(platformAtom)

  const AVAILABLE_PLATFORMS = data.reduce<Platform[]>(
    (acc, channel) => {
      const isThisPlatformExist = acc.find(
        (prevPlatform) => prevPlatform.type === channel.platform
      )
      if (isThisPlatformExist) {
        return acc
      }

      const platform = PLATFORMS.find(
        (platform) => platform.type === channel.platform
      )
      if (platform) {
        acc.push({
          name: platform.name,
          icon: platform.icon,
          type: channel.platform,
          channel_uid: channel.uid,
        })
      }
      return acc
    },
    [
      {
        name: "All channels",
        icon: <></>,
        type: "ALL" as POST_ON,
        channel_uid: "",
      },
    ]
  )

  const onClick = (platform: POST_ON) => {
    form.pushValue(get_post_by_platform(platform))
    setActivePlatform(platform)
  }

  return (
    <div>
      <ul className='flex flex-col gap-2 px-3 py-5'>
        {AVAILABLE_PLATFORMS.map((platform) => (
          <li key={platform.channel_uid}>
            <button
              type='button'
              onClick={() => onClick(platform.type)}
              className={cn(
                "flex gap-x-2 hover:cursor-pointer w-full items-center px-4 py-1.5 border border-gray-100 hover:border-gray-200 transition-colors rounded-2xl",
                {
                  "bg-gray-100 border-gray-200 font-normal":
                    platform.type === activePlatform,
                }
              )}
            >
              <input type='checkbox' />
              {platform.icon}
              <span>{platform.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const PlatformSelectorSidebar = withForm({
  ...initialFormOptions,
  render({ form }) {
    return (
      <form.Field
        name='posts'
        mode='array'
        children={(form: PostField) => {
          return <PlatformSelector form={form} />
        }}
      />
    )
  },
})
