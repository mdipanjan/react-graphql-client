import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import BookList from "./components/BookList";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
