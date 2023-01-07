import styled from "styled-components";

export const ProductRowStyled = styled.tr<{ background?: string }>`
  background-color: ${(props) => props.background || "red"};
  border-radius: 10px;
  transition: all 0.3s ease-in;
  cursor: pointer;
`;
export const ProductData = styled.td`
  text-align: left;
  padding: 0.75rem 0.5rem;
  text-transform: capitalize;
`;
