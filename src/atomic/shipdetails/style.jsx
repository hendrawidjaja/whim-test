/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { flex } from "../../styles/base";

export const Section = styled(flex)`
  border-radius: 1%;
  border: 1px solid rgba(240, 196, 32, 0.3);
  flex-direction: column;
  padding: 1rem 0.5rem 1rem;
  transition: 0.5s ease-out;
  width: 100%;

  &:hover {
    border-color: var(--cl-moon-yellow);
    transition: 0.5s ease-in;
  }
`;

export const Card = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  width: 100%;
`;

export const ButtonClose = styled.button`
  color: var(--cl-btn-close);
  cursor: pointer;
  font-size: 1.8rem;
  opacity: 0.6;
  position: absolute;
  right: 0.5%;
  transition: 0.5s ease-out;
  user-select: none;

  &:hover {
    opacity: 1;
    transition: 0.5s ease-in;
  }
`;

export const H5 = styled.h5`
  padding-top: 0.5rem;
`;

export const Column = styled(flex)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 375px 425px);
  grid-column-gap: 1rem;
`;
