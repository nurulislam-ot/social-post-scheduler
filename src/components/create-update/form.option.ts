import {
  createFormHook,
  formOptions,
  type FormAsyncValidateOrFn,
  type FormOptions,
  type FormValidateFn,
} from "@tanstack/react-form"
import type { CreateUpdatePostType } from "../../schema/create-update-post"
import { SCHEDULE_TYPE_CONSTANT } from "../../types/post"
import { fieldContext, formContext } from "../../context/form"
import { FormInput } from "../form-input/input"

export type InitialFormOption = FormOptions<
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

const defaultValues: CreateUpdatePostType = {
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
  },
  formComponents: {},
})
