import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useAtomValue } from "jotai"
import { useRef } from "react"
import { cn } from "../../lib/cn"
import { CreateUpdatePostSchema } from "../../schema/create-update-post"
import { platformAtom } from "../../store/platform"
import { FacebookForm } from "./facebook-form"
import { initialFormOptions, useAppForm } from "./form.option"
import { JSONPreview } from "./json-preview"

export default function Form() {
  const boxRef = useRef<HTMLDivElement>(null)
  const { activePlatform } = useAtomValue(platformAtom)
  const form = useAppForm({
    ...initialFormOptions,
    validators: {
      onBlur: CreateUpdatePostSchema,
    },
  })

  useGSAP(() => {
    gsap.fromTo(boxRef.current, { y: 50, opacity: 0.2 }, { y: 0, opacity: 1 })
  }, [activePlatform])

  return (
    <div className='bg-neutral-50'>
      <div ref={boxRef} className='w-3/5 mx-auto py-10'>
        <FacebookForm form={form} />

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

        <JSONPreview form={form} />
      </div>
    </div>
  )
}
