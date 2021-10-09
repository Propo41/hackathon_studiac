import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql";

ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById("root")
);
