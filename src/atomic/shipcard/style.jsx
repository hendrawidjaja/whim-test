/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { DEVICE, flex } from "../../styles/base";

export const Card = styled(flex)`
  border-radius: 5%;
  border: 1px solid var(--cl-light-moon-yellow);
  flex-direction: column;
  margin-top: 2.5%;
  padding: 1rem 1rem;
  transition: 0.5s ease-in;
  width: 49%;

  @media ${DEVICE.minDesktop} {
    margin-top: 0.5%;
    width: 24.5%;
  }
`;

export const Model = styled.span`
  color: var(--cl-light-grey);
  font-size: 0.75rem;
  width: 65%;

  @media ${DEVICE.minDesktop} {
    width: 100;
  }
`;

export const Span = styled.span`
  border-radius: 15%;
  border: 1px solid var(--cl-moon-yellow);
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.25rem 0.25rem;
  position: absolute;
  right: 2.5%;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;

  @media ${DEVICE.minDesktop} {
    font-size: 1.1em;
  }
`;

export const P = styled.p`
  user-select: none;
  font-size: 0.8rem;
  width: 75%;

  @media ${DEVICE.minDesktop} {
    font-size: 1.4rem;
    width: 100%;
  }
`;
