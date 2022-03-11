import Link from "next/link";
import styled from "styled-components";
import Button from "../../components/Button";
import { getPostData, getSortedPostsData } from "../../lib/posts";

export default function BlogPost({ post }) {
  return (
    <PostContainer>
      <PostArticle>
        <h1>{post.title}</h1>
        <time dateTime={post.date}>{post.date}</time>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
        <Link href="/">
          <a><Button text={'← Back home'} /></a>
        </Link>
      </PostArticle>
    </PostContainer>
  );
}

export async function getStaticPaths() {
  const posts = getSortedPostsData();

  return {
    paths: posts.map((post) => ({ params: { id: post.id } })),
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const post = await getPostData(id);
  return {
    props: {
      post: post,
    },
  };
}

const PostArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;

  div {
    display: flex;
    flex-direction: column;
  }
  time{
    width: 100%;
    font-weight: lighter;
  }
`;

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
`;
