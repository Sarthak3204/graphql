import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_REPO = gql`
  mutation CreateRepo($name: String!, $visibility: RepositoryVisibility!) {
    createRepository(input: { name: $name, visibility: $visibility }) {
      repository {
        id
        name
        url
      }
    }
  }
`;

export default function CreateRepoButton() {
  const [name, setName] = useState("");
  const [visibility, setVisibility] = useState("PUBLIC");
  const [createRepository, { loading, error, data }] = useMutation(CREATE_REPO);

  function handleCreateRepo() {
    createRepository({
      variables: {
        name,
        visibility,
      },
    });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div>
        <label>
          Repository Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Visibility:
          <select
            value={visibility}
            onChange={(event) => setVisibility(event.target.value)}
          >
            <option value="PUBLIC">Public</option>
            <option value="PRIVATE">Private</option>
          </select>
        </label>
      </div>
      <button onClick={handleCreateRepo}>Create Repository</button>
      {data && (
        <div>
          <p>Repository Created:</p>
          <p>ID: {data.createRepository.repository.id}</p>
          <p>Name: {data.createRepository.repository.name}</p>
          <p>
            URL:{" "}
            <a href={data.createRepository.repository.url}>
              {data.createRepository.repository.url}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
