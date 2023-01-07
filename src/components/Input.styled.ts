import styled from "styled-components";

export const InputStyled = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: large;
  text-align: center;
`;

export const UserInput = styled.input.attrs(() => ({ type: "text" }))`
  display: block;
  padding: 0.25rem;
  margin-top: 0.5rem;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 7px rgba(255, 255, 255, 0.8);
  text-align: center;
  font-family: inherit;

  @media screen and (min-width: 700px) {
    margin-top: 0.75rem;
    padding: 0.5rem;
  }
`;
