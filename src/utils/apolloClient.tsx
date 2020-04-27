import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { STRAPI_SERVER_URL } from "../constants";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${STRAPI_SERVER_URL}/graphql`,
});

const client = new ApolloClient({
  cache,
  link,
});

export default client;
