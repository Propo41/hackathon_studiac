import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const END_POINT = process.env.REACT_APP_GRAPHQL_ENDPOINT;

const token = localStorage.getItem("x-studiac-access-token");
var client = null;

if (token) {
  const httpLink = createHttpLink({
    uri: END_POINT,
  });
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
} else {
  client = new ApolloClient({
    uri: END_POINT,
    cache: new InMemoryCache(),
  });
}

export default client;
