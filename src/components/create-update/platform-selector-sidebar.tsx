import { useAtomValue, useSetAtom } from "jotai"
import type { JSX } from "react"
import FacebookIcon from "../../icons/facebook"
import InstagramIcon from "../../icons/instagram"
import LinkedInIcon from "../../icons/linkedin"
import PinterestIcon from "../../icons/pinterest"
import RedditIcon from "../../icons/reddit"
import SnapchatIcon from "../../icons/snapchat"
import TiktokIcon from "../../icons/tiktok"
import TwitterIcon from "../../icons/twitter"
import YoutubeIcon from "../../icons/youtube"
import { cn } from "../../lib/cn"
import { platformAtom, setActivePlatformAtom } from "../../store/platform"
import type { POST_ON } from "../../types/post"
import type {
  FormAsyncValidateOrFn,
  FormValidateFn,
  ReactFormExtendedApi,
} from "@tanstack/react-form"
import type { CreateUpdatePostType } from "../../schema/create-update-post"
import { initialFormOptions, withForm } from "./form.option"

type Platform = {
  id: number
  name: string
  type: POST_ON
  icon: JSX.Element
}

const AVAILABLE_PLATFORMS: Platform[] = [
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

type Form = ReactFormExtendedApi<
  CreateUpdatePostType,
  FormValidateFn<CreateUpdatePostType>,
  FormValidateFn<CreateUpdatePostType>,
  FormAsyncValidateOrFn<CreateUpdatePostType>,
  FormValidateFn<CreateUpdatePostType>,
  FormAsyncValidateOrFn<CreateUpdatePostType>,
  FormValidateFn<CreateUpdatePostType>,
  FormAsyncValidateOrFn<CreateUpdatePostType>,
  FormAsyncValidateOrFn<CreateUpdatePostType>,
  CreateUpdatePostType
>

type PlatformSelectorSidebarProps = {
  form: Form
}

function PlatformSelector({ form }: PlatformSelectorSidebarProps) {
  const { activePlatform } = useAtomValue(platformAtom)
  const setActivePlatform = useSetAtom(setActivePlatformAtom)

  const onPlatformClick = (platform: POST_ON) => {
    setActivePlatform(platform)
    form.setFieldValue("isEditMode", true)
    console.log(form.getFieldValue("isEditMode"))
  }

  return (
    <div>
      <ul className='flex flex-col gap-2 px-3 py-5'>
        {AVAILABLE_PLATFORMS.map((platform) => (
          <li key={platform.id}>
            <button
              type='button'
              onClick={() => onPlatformClick(platform.type)}
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
      <form.Field name='posts' mode='array'>
        {(form) => {
          const onclick = () =>
            form.pushValue({
              content: "",
              media_urls: [],
              post_on: "FACEBOOK",
              settings: {
                post_as: "REELS",
              },
              status: "DRAFT",
              type: "TEXT",
            })
          return <PlatformSelector form={form} />
        }}
      </form.Field>
    )
  },
})
