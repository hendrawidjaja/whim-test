/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { flex } from "../../styles/base";

export const Card = styled(flex)`
  border-radius: 5%;
  border: 1px solid rgba(240, 196, 32, 0.5);
  margin-top: 0.5%;
  padding: 1rem 0.5rem;
  width: 24.5%;
  flex-direction: column;
`;

export const Model = styled.span`
  color: #484848;
  font-size: 0.75rem;
`;

export const Span = styled.span`
  border-radius: 15%;
  border: 1px solid rgba(240, 196, 32, 1);
  cursor: pointer;
  margin-left: auto;
  padding: 0.25rem 0.25rem;
  position: absolute;
  right: 2.5%;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
`;

export const P = styled.p`
  user-select: none;
  font-size: 1.4rem;
`;
