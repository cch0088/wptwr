import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { GRAPHQL_URI } from "../config";

const link = createHttpLink({
  uri: GRAPHQL_URI,
  credentials: 'include'
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});
