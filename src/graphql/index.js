import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const END_POINT = process.env.REACT_APP_GRAPHQL_ENDPOINT;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsic3R1ZGVudCIsImFkbWluIiwiZ3Vlc3QiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoiYWRtaW4iLCJ4LWhhc3VyYS11c2VyLWlkIjoiZTdlOGYyMDYtZjE1OC00MjI3LWI4ZGMtYjE0ZWVmMmMyMmFkIn0sImlhdCI6MTYzMzgwMDc3MSwiZXhwIjoxNjMzOTczNTcxfQ.AwbK3y9rPktCnQAlhnAXF-UJ6qs0jBE0JJrrteYYc8w";
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
