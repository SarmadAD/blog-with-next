import styled from "styled-components";
import { PostList } from "../components/PostList/PostList";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <HomeContainer>
      <h2>Blog</h2>
      <PostList posts={posts} />
    </HomeContainer>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts: posts,
    },
  };
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
