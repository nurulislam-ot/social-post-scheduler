import { initialFormOptions, withForm } from "./form.option"

export const FacebookForm = withForm({
  ...initialFormOptions,

  render({ form }) {
    return (
      <div>
        <div className='mb-5'>
          <h3 className='text-2xl font-medium'>ফেসবুক</h3>
          <p>
            ফেসবুকে পোস্ট করার জন্য নিচের ফর্মটি পূরণ করুন। আপনি একাধিক পোস্ট
            যোগ করতে পারেন এবং সেগুলি নির্দিষ্ট সময়ে নির্ধারণ করতে পারেন।
          </p>
        </div>
        <form.Field
          name='posts'
          mode='array'
          children={(field) => {
            const onPush = () => {
              field.pushValue({
                content: "",
                type: "TEXT",
                media_urls: [],
                post_on: "FACEBOOK",
                settings: { post_as: "POST" },
                status: "QUEUED",
                channel_uid: "",
              })
            }
            return (
              <div>
                {field.state.value.map((_, index) => (
                  <form.AppField
                    key={index}
                    name={`posts[${index}].content`}
                    children={(subField) => (
                      <subField.FormInput label='Post Description' />
                    )}
                  />
                ))}
                <button type='button' onClick={onPush}>
                  Push
                </button>
              </div>
            )
          }}
        />
        <form.AppField
          name='scheduled_time'
          children={(field) => (
            <field.FormInput type='date' label='Schedule Time' />
          )}
        />
      </div>
    )
  },
})
