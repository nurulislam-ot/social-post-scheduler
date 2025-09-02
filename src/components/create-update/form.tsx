import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useAtomValue } from "jotai"
import { useRef } from "react"
import { cn } from "../../lib/cn"
import { FacebookForm } from "./facebook-form"
import { platformAtom } from "../../store/platform"
import { YouTubeForm } from "./youtube/youtube-form"
import { initialFormOptions, withForm } from "./form.option"
import { POST_ON_CONSTANT, type POST_ON } from "../../types/post"
import type {
  CreateUpdatePostForm,
  CreateUpdateReactFormApi,
} from "@/types/tanstack-post"

const FormBody = withForm({
  ...initialFormOptions,
  render: function ({ form }) {
    return <Form form={form} />
  },
})

type RenderFormByPlatformProps = {
  platform: POST_ON
  form: CreateUpdatePostForm & CreateUpdateReactFormApi
}

const RenderFormByPlatform = ({
  platform,
  form,
}: RenderFormByPlatformProps) => {
  switch (platform) {
    case POST_ON_CONSTANT.FACEBOOK:
      return <FacebookForm form={form} />
    case POST_ON_CONSTANT.YOUTUBE:
      return <YouTubeForm form={form} />
    default:
      return null
  }
}

type FormProps = {
  form: CreateUpdatePostForm & CreateUpdateReactFormApi
}

function Form({ form }: FormProps) {
  const boxRef = useRef<HTMLDivElement>(null)
  const { activePlatform } = useAtomValue(platformAtom)

  useGSAP(() => {
    gsap.fromTo(boxRef.current, { y: 50, opacity: 0.2 }, { y: 0, opacity: 1 })
  }, [activePlatform])

  return (
    <div className='bg-neutral-50'>
      <div ref={boxRef} className='w-3/5 mx-auto py-10'>
        <RenderFormByPlatform form={form} platform={activePlatform} />

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button
              className={cn({
                "bg-amber-500 hover:cursor-pointer text-white px-2 text-sm py-1 rounded":
                  true,
                "opacity-50 cursor-not-allowed": !canSubmit || isSubmitting,
              })}
              type='submit'
              disabled={!canSubmit}
            >
              {isSubmitting ? "..." : "Submit"}
            </button>
          )}
        />
      </div>
    </div>
  )
}

export default FormBody
