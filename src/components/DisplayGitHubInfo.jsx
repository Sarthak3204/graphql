import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query MeQuery {
    viewer {
      login
      name
    }
  }
`;

export default function DisplayGitHubInfo() {
  const { loading, error, data } = useQuery(GET_DATA);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <h1>Hello {data.viewer.name}</h1>
    </div>
  );
}
