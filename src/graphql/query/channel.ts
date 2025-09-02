import { gql } from "@apollo/client"

export const FETCH_SELECTED_CHANNELS = gql`
  query GetAllSelectedChannels {
    getAllSelectedChannels {
      data {
        uid
        platform
        channel_type
        profile_image
        name
        setting {
          setting_data {
            country
            label
            timezone
          }
        }
      }
    }
  }
`
