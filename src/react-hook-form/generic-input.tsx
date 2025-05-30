import {
  Controller,
  useFormContext,
  type FieldValues,
  type Path,
} from "react-hook-form"

type GenericInputProps<T extends FieldValues> = {
  name: Path<T>
} & React.InputHTMLAttributes<HTMLInputElement>

export default function GenericInput<T extends FieldValues>({
  name,
  ...props
}: GenericInputProps<T>) {
  const { control } = useFormContext<T>()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          className='border border-gray-200 p-2 rounded'
          {...field}
          {...props}
          onChange={(event) => field.onChange(event.target.value)}
        />
      )}
    />
  )
}
