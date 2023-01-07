import styled from "styled-components";

export const ProductRowStyled = styled.tr<{ background?: string }>`
  --border-radius: 10px;
  cursor: pointer;
  & td {
    background-color: ${(props) => props.background || "red"};
  }

  &:first-child td:first-child {
    border-top-left-radius: var(--border-radius);
  }
  &:first-child td:last-child {
    border-top-right-radius: var(--border-radius);
  }

  &:last-child td:first-child {
    border-bottom-left-radius: var(--border-radius);
  }
  &:last-child td:last-child {
    border-bottom-right-radius: var(--border-radius);
  }
`;
export const ProductData = styled.td`
  text-align: center;
  padding: 1rem 0.5rem;
  text-transform: capitalize;
`;
