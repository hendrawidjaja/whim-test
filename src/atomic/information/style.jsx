/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { DEVICE } from "../../styles/base";

export const Wrapper = styled.div`
  border: 0.5px solid;
  display: flex;
  margin-top: 0.75rem;
  padding-left: 0.35rem;
  padding-right: 0.35rem;
  align-items: center;

  @media ${DEVICE.minDesktop} {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`;

export const P = styled.p`
  font-size: 0.8rem;

  @media ${DEVICE.minDesktop} {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const Split = styled.div`
  display: grid;
  grid-template-columns: 85px auto;

  @media ${DEVICE.minDesktop} {
    grid-template-columns: 100px auto;
  }
`;
