import type { CreateUpdateForm } from "@/schema/create-update-post"
import type {
  FieldApi,
  FieldAsyncValidateOrFn,
  FieldValidateOrFn,
  FormApi,
  FormAsyncValidateOrFn,
  FormValidateFn,
  FormValidateOrFn,
  ReactFormApi,
  WithFormProps,
} from "@tanstack/react-form"
import type { ComponentType } from "react"

export type WithForm = WithFormProps<
  CreateUpdateForm,
  FormValidateFn<CreateUpdateForm>,
  FormValidateFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  FormValidateOrFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  FormValidateOrFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  CreateUpdateForm,
  Record<string, ComponentType<CreateUpdateForm>>,
  Record<string, ComponentType<CreateUpdateForm>>
>

export type CreateUpdatePostForm = FormApi<
  CreateUpdateForm,
  FormValidateFn<CreateUpdateForm>,
  FormValidateOrFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  FormValidateOrFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  FormValidateOrFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  CreateUpdateForm
>

export type CreateUpdateReactFormApi = ReactFormApi<
  CreateUpdateForm,
  FormValidateOrFn<CreateUpdateForm>,
  FormValidateOrFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  FormValidateOrFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  FormValidateOrFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  CreateUpdateForm
>

export type PostField = FieldApi<
  CreateUpdateForm,
  "posts",
  CreateUpdateForm["posts"],
  FieldValidateOrFn<CreateUpdateForm, "posts">,
  FieldValidateOrFn<CreateUpdateForm, "posts">,
  FieldAsyncValidateOrFn<CreateUpdateForm, "posts">,
  FieldValidateOrFn<CreateUpdateForm, "posts">,
  FieldAsyncValidateOrFn<CreateUpdateForm, "posts">,
  FieldValidateOrFn<CreateUpdateForm, "posts">,
  FieldAsyncValidateOrFn<CreateUpdateForm, "posts">,
  FormValidateFn<CreateUpdateForm>,
  FormValidateOrFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  FormValidateOrFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  FormValidateOrFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  FormAsyncValidateOrFn<CreateUpdateForm>,
  CreateUpdateForm
>
