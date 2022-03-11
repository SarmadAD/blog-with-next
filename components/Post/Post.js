import Link from "next/link";
import * as React from "react";
import styled from "styled-components";

export function Post({ id, title, date }) {
  return (
    <Link href={`/blog/${id}`} passHref>
      <LinkContainer>
        <Container>
          <Title id={id}>{title}</Title>
          <time dateTime={date}>{date}</time>
        </Container>
      </LinkContainer>
    </Link>
  );
}

const Container = styled.article`
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 8px;
  background-color: #E1E7DE;
`;

const Title = styled.h3`
  margin: 0;
`;

const LinkContainer = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: black;
`;
