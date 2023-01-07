import styled from "styled-components";

export const PaginationStyled = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const PaginationButton = styled.button.attrs(() => ({
  type: "button",
}))`
  font-size: smaller;
  background: white;
  padding: 0.75rem;
  border: 3px solid gold;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  transition: 0.3s;

  &:hover,
  &:focus {
    box-shadow: 0 0 25px rgb(255, 255, 255);
    transform: scale(1.05);
  }

  &:disabled,
  &:hover:disabled {
    --disabled: rgba(0, 0, 0, 0.2);
    cursor: auto;
    box-shadow: none;
    color: var(--disabled);
    transform: none;
    border: 3px solid var(--disabled);
  }
`;
