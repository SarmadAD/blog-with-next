import styled from "styled-components";
import { css } from "styled-components";

export default function Button({ text }) {
  return <StyledButton>{text}</StyledButton>;
}

export const StyledButton = styled.button`
  padding: 0.5em;
  background-color: #e1e7de;
  border-radius: 10px;
  cursor: pointer;
`;
