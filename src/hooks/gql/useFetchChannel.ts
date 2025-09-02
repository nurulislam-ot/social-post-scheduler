import { useQuery } from "@apollo/client"
import { FETCH_SELECTED_CHANNELS } from "@/graphql/query/channel"
import type { GetAllSelectedChannelsResponse } from "@/interface/channel"

export default function useFetchChannels() {
  const { data, loading } = useQuery<GetAllSelectedChannelsResponse>(
    FETCH_SELECTED_CHANNELS
  )

  return { data: data?.getAllSelectedChannels.data ?? [], isLoading: loading }
}
