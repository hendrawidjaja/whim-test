/* eslint-disable no-unused-vars */
import styled from "styled-components";

export const flex = styled.div`
  display: flex;
  position: relative;
`;

export const SPACING = {
  Gutter: `
    padding-left: 1rem;
    padding-right: 1rem;
  `
};

export const DEVICE = {
  minFold: `(min-width: 280px)`,
  minMobileS: `(min-width: 320px)`,
  minMobileL: `(min-width: 425px)`,
  minTablet: `(min-width: 768px)`,
  minDesktop: `(min-width: 960px)`,
  minDesktopM: `(min-width: 1920px)`
};
