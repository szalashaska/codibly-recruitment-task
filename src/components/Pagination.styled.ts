import styled from "styled-components";

export const PaginationStyled = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 2px solid saddlebrown;
`;

export const PaginationButton = styled.button.attrs(() => ({
  type: "button",
}))`
  padding: 1rem;
  margin-inline: 1rem;
`;
