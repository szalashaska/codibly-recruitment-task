import styled from "styled-components";

export const ProductStyled = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  margin: 1rem;
  border: 2px solid red;
`;
