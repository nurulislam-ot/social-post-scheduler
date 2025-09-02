import { ApolloProvider } from "@apollo/client"
import CreatePostPage from "./pages/create-post"
import { client } from "./helper/client"

function App() {
  return (
    <ApolloProvider client={client}>
      <CreatePostPage />
    </ApolloProvider>
  )
}

export default App
