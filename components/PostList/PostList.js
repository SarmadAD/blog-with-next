import * as React from "react";
import styled from "styled-components";
import { Post } from "../Post/Post";

export function PostList({ posts }) {
  return (
    <List>
      {posts.map((post) => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content:center;
  gap: 1rem;
  max-width: 60ch;
  list-style: none;
`;
