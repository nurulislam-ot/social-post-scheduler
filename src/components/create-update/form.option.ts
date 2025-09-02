import { createFormHook, formOptions } from "@tanstack/react-form"
import { fieldContext, formContext } from "@/context/form"
import { SCHEDULE_TYPE_CONSTANT } from "@/types/post"
import { FormInput } from "../form-input/input"
import { FormMultiSelect } from "../form-input/multi-select"
import { FormTextArea } from "../form-input/textarea"
import type { CreateUpdateForm } from "@/schema/create-update-post"

const defaultValues: CreateUpdateForm = {
  isEditMode: false,
  posts: [],
  schedule_type: SCHEDULE_TYPE_CONSTANT.INSTANT,
  scheduled_time: "",
}

export const initialFormOptions = formOptions({
  defaultValues,
  onSubmit(props) {
    console.log(props.value)
  },
})

export const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,

  fieldComponents: {
    FormInput,
    FormTextArea,
    FormMultiSelect,
  },
  formComponents: {},
})
