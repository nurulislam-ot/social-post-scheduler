import { zodResolver } from "@hookform/resolvers/zod"
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
  type UseFieldArrayRemove,
} from "react-hook-form"
import { z } from "zod"
import GenericInput from "./react-hook-form/generic-input"

export default function Test() {
  const form = useForm<UserType>({
    defaultValues: {
      name: "John Doe",
      age: 30,
    },
    resolver: zodResolver(UserSchema),
  })

  return (
    <FormProvider {...form}>
      <Form />
    </FormProvider>
  )
}

const UserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().min(0, "Age must be a positive number"),
  skills: z.array(
    z.object({
      name: z.string().min(1, "Skill name is required"),
      level: z.enum(["beginner", "intermediate", "advanced"]),
    })
  ),
})

type UserType = z.infer<typeof UserSchema>

const Form = () => {
  const form = useFormContext<UserType>()

  const onSubmit = (data: UserType) => {
    console.log("Form submitted with data:", data)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <GenericInput<UserType> name='name' />
      <GenericInput<UserType> name='age' type='number' />
      <SkillForm />
      <button type='submit'>Submit</button>
    </form>
  )
}

const SkillInput = ({
  index,
  remove,
}: {
  index: number
  remove: UseFieldArrayRemove
}) => {
  return (
    <div>
      <GenericInput<UserType>
        name={`skills.${index}.name`}
        placeholder='Skill Name'
      />
      <GenericInput<UserType>
        name={`skills.${index}.level`}
        placeholder='Skill Level'
        type='text'
      />
      <button type='button' onClick={() => remove(index)}>
        Remove Skill
      </button>
    </div>
  )
}

const SkillForm = () => {
  const form = useFormContext<UserType>()
  const { append, fields, remove } = useFieldArray({
    control: form.control,
    name: "skills",
  })
  return (
    <div>
      {fields.map((field, index) => (
        <SkillInput key={field.id} index={index} remove={remove} />
      ))}

      <button
        onClick={() => {
          append({ name: "Skill", level: "beginner" })
        }}
      >
        Add Skill
      </button>
    </div>
  )
}
