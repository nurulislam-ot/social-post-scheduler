import {
  useFieldArray,
  useFormContext,
  type ArrayPath,
  type FieldValues,
  type UseFieldArrayReturn,
} from "react-hook-form"

type FieldArrayProps<T extends FieldValues> = {
  children: (field: UseFieldArrayReturn<T, ArrayPath<T>>) => React.ReactNode
  name: ArrayPath<T>
}

export const GenericArray = <T extends FieldValues>({
  children,
  name,
}: FieldArrayProps<T>) => {
  const { control } = useFormContext<T>()
  const fieldArray = useFieldArray({ control, name })

  return children(fieldArray)
}

GenericArray.displayName = "FieldArray"
