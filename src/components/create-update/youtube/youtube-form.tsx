import React from "react"
import { initialFormOptions, withForm } from "../form.option"
import { POST_ON_CONSTANT } from "../../../types/post"

export const YouTubeForm = withForm({
  ...initialFormOptions,

  render({ form }) {
    return (
      <div>
        <div className='mb-5'>
          <h3 className='text-2xl font-medium'>ইউটিউব</h3>
          <p>
            ইউটিউবে ভিডিও আপলোড করার জন্য নিচের ফর্মটি পূরণ করুন। আপনি একাধিক
            ভিডিও যোগ করতে পারেন এবং সেগুলি নির্দিষ্ট সময়ে নির্ধারণ করতে পারেন।
          </p>
        </div>
        <form.Field
          name='posts'
          mode='array'
          children={(field) => {
            return (
              <div>
                {field.state.value.map((post, index) => {
                  if (post.post_on !== POST_ON_CONSTANT.YOUTUBE) return null
                  return (
                    <React.Fragment>
                      <form.AppField
                        key={index}
                        name={`posts[${index}].settings.title`}
                        children={(subField) => (
                          <subField.FormInput label='Post Title' />
                        )}
                      />
                      <form.AppField
                        key={index}
                        name={`posts[${index}].content`}
                        children={(subField) => (
                          <subField.FormTextArea label='Post Description' />
                        )}
                      />
                    </React.Fragment>
                  )
                })}
              </div>
            )
          }}
        />
      </div>
    )
  },
})
