import { ApolloClient, InMemoryCache } from "@apollo/client"

import { getCookie } from "./cookie"

const currentLanguage =
  typeof window !== "undefined"
    ? localStorage.getItem("i18nextLng") || "en"
    : "en"

export const client = new ApolloClient({
  uri: import.meta.env.VITE_APP_POST_SCHEDULER_GRAPHQL_URL,
  cache: new InMemoryCache(),
  devtools: {
    enabled: true,
  },
  defaultContext: {
    headers: {
      authorization: `Bearer ${getCookie(
        import.meta.env.VITE_APP_ACCESS_TOKEN
      )}`,
      "Accept-language": currentLanguage,
    },
  },
})
