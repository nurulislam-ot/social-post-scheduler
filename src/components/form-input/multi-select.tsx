import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react"
import { useFieldContext } from "../../context/form"

type FormMultiSelectProps<T> = {
  label?: string
  options: Array<{ value: T; label: string }>
}

export function FormMultiSelect<T>({
  label,
  options = [],
}: FormMultiSelectProps<T>) {
  const field = useFieldContext<T[]>()

  return (
    <Field>
      <Label>{label}</Label>
      <Listbox
        value={field.state.value}
        onChange={(value) => field.handleChange(value)}
        multiple
      >
        <ListboxButton>
          {field.state.value.map((channel) => channel).join(", ")}
        </ListboxButton>
        <ListboxOptions anchor='bottom'>
          {options.map((option, index) => (
            <ListboxOption
              key={index}
              value={option.value}
              className='data-focus:bg-blue-100'
            >
              {option.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </Field>
  )
}
