import React, { Component } from "react";
import { gql, useQuery } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

function BookList(props) {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <ul id="book-list">
        {data.books !== undefined &&
          data.books.length > 0 &&
          data.books.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default BookList;
