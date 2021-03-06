/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { SPACING, flex } from "../../styles/base";

export const Section = styled(flex)`
  ${SPACING.Gutter};
  flex-direction: column;
  height: 100vh;

  &.center {
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled(flex)`
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Row = styled(flex)`
  align-items: center;
`;
/*
export const WrapperButtons = styled(flex)`
  margin-left: auto;
`;

export const Button = styled.button`
  font-size: 2rem;

  &:last-of-type {
    margin-left: 1rem;
  }
`;
 */
