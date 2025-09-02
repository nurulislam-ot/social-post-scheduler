import FormBody from "../components/create-update/form"
import {
  initialFormOptions,
  useAppForm,
} from "../components/create-update/form.option"
import { PlatformSelectorSidebar } from "../components/create-update/platform-selector-sidebar"
import { CreateUpdatePostSchema } from "../schema/create-update-post"

export default function CreatePostPage() {
  const form = useAppForm({
    ...initialFormOptions,
    validators: {
      onBlur: CreateUpdatePostSchema,
    },
  })

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        form.handleSubmit()
      }}
      className='grid grid-cols-[200px_1fr_320px] grid-rows-[60px_1fr] h-screen'
    >
      <div className='col-span-3 border-b border-gray-100'></div>
      <PlatformSelectorSidebar form={form} />
      <FormBody form={form} />
      <div></div>
    </form>
  )
}
