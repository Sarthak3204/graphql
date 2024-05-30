import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_REPO = gql`
  query {
    viewer {
      repositories(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          name
          description
          primaryLanguage {
            name
          }
        }
      }
    }
  }
`;

export default function DisplayGitHubRepo() {
  const { loading, error, data } = useQuery(GET_REPO);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ul>
      {data.viewer.repositories.nodes.map(
        ({ name, description, primaryLanguage }) => {
          return (
            <li>
              <h4>
                {name} - {primaryLanguage?.name || "No specific"}
              </h4>
              <p>{description}</p>
            </li>
          );
        }
      )}
    </ul>
  );
}
