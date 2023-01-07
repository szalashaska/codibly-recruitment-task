import styled from "styled-components";
import { ReactComponent as Close } from "../assets/close.svg";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ProductDetailStyled = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  padding: 2.5rem 2rem;
  border-radius: 10px;
  position: absolute;
  transform: translate(50%, -50%);
  right: 50%;
  top: 50%;
  z-index: 10;
  box-shadow: 0 0 10px rgba(66, 68, 90, 1);
`;

export const DetailDescribtion = styled.span`
  font-weight: 700;
  font-size: smaller;
  color: rgba(0, 0, 0, 0.8);
  margin-right: 0.5em;
`;
export const DetailText = styled.p`
  font-size: large;
  margin-bottom: 0.75rem;
  text-transform: capitalize;
`;

export const CloseButton = styled.button.attrs(() => ({
  type: "button",
}))`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem;
  border: none;
  background: transparent;
  transition: 0.3s;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const CloseIco = styled(Close)`
  fill: black;
`;
