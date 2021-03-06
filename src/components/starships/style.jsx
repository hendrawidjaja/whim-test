/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { DEVICE, SPACING, flex } from "../../styles/base";

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
  padding-top: 1rem;
  padding-bottom: 2rem;

  @media ${DEVICE.minDesktop} {
  }
`;

export const Row = styled(flex)`
  flex-direction: column;

  @media ${DEVICE.minDesktop} {
    align-items: center;
    flex-direction: row;
  }
`;
