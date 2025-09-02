import { z } from "zod"
import { withForm } from "../components/create-update/form.option"
import {
  formOptions,
  type WithFormProps,
  type FormValidateFn,
  type FormAsyncValidateOrFn,
  type FormValidateOrFn,
} from "@tanstack/react-form"
import type { ComponentType } from "react"

const UserSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
})

type User = z.infer<typeof UserSchema>

const firstUser: User = {
  firstName: "John",
  lastName: "Doe",
}

const formOpt = formOptions({
  defaultValues: firstUser,
  onSubmit: (props) => {
    console.log(props.value)
  },
})

type Check = WithFormProps<
  User,
  FormValidateFn<User>,
  FormValidateFn<User>,
  FormAsyncValidateOrFn<User>,
  FormValidateOrFn<User>,
  FormAsyncValidateOrFn<User>,
  FormValidateOrFn<User>,
  FormAsyncValidateOrFn<User>,
  FormAsyncValidateOrFn<User>,
  User,
  Record<string, ComponentType<User>>,
  Record<string, ComponentType<User>>
>

const form: Check = withForm({
  ...formOpt,
  validators: {
    onBlur: UserSchema,
  },
  render: ({ form }) => {
    return (
      <form>
        <form.Field
          name='firstName'
          children={(field) => <input onBlur={field.handleBlur} />}
        />
      </form>
    )
  },
})
