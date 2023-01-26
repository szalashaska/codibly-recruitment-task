import styled from "styled-components";

export const AppStyled = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: lightblue;
`;

export const MaxWidthWrapper = styled.div`
  margin-inline: auto;
  max-width: 1000px;
  height: 100%;
  padding: 1rem;
  @media screen and (min-width: 700px) {
    padding: 2rem;
  }
`;
