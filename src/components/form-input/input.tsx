import { useFieldContext } from "../../context/form"
import { cn } from "../../lib/cn"

type FormInputProps = {
  label?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function FormInput({ label, id, ...props }: FormInputProps) {
  const field = useFieldContext<string>()
  return (
    <div className='flex flex-col mb-3'>
      <label htmlFor={id} className='text-sm mb-1'>
        {label}
      </label>
      <input
        {...props}
        id={id}
        value={field.state.value}
        className={cn(
          "border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all bg-white",
          props.className
        )}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      {field.state.meta.errors &&
        field.state.meta.errors.map((error, index) => (
          <em className='text-red-500 text-sm mt-1' key={index}>
            {error.message}
          </em>
        ))}
    </div>
  )
}
