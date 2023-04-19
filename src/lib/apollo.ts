import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.NEXT_API_URL,
  headers: {
    'Authorization' : `Bearer ${process.env.NEXT_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache()
})  