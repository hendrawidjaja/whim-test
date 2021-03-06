/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { DEVICE, flex } from "../../styles/base";

export const WrapperSearch = styled(flex)`
  flex-direction: column;

  @media ${DEVICE.minDesktop} {
    margin-left: 1rem;
  }
`;

export const Label = styled.label`
  font-size: 0.8rem;
  height: 1.1rem;
`;

export const Input = styled.input`
  align-self: flex-end;
  height: 2rem;
  width: 100%;

  @media ${DEVICE.minDesktop} {
    min-width: 300px;
    padding: 0 0.75rem;
    width: auto;
  }
`;
