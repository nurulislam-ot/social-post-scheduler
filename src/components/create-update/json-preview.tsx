import { initialFormOptions, withForm } from "./form.option"

export const JSONPreview = withForm({
  ...initialFormOptions,
  render({ form }) {
    return (
      <form.Subscribe>
        {(form) => (
          <pre className='bg-white p-4 rounded-lg overflow-x-auto'>
            {JSON.stringify(form.values, null, 2)}
          </pre>
        )}
      </form.Subscribe>
    )
  },
})
