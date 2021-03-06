import styled, { css } from "styled-components";
import { DEVICE, flex } from "../../styles/base";

export const WrapperButtons = styled(flex)`
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;

  @media ${DEVICE.minDesktop} {
    margin-left: auto;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`;

export const Button = styled.button`
  align-items: center;
  display: flex;
  position: relative;

  @media ${DEVICE.minDesktop} {
  }

  ${(props) =>
    !props.disabled
      ? css`
          cursor: pointer;
          &:hover {
            p {
              opacity: 1;
            }
          }
        `
      : css`
          opacity: 0.5;
        `}

  &:last-of-type {
    @media ${DEVICE.minDesktop} {
      padding-left: 1rem;
      padding-right: 2rem;
    }
  }
`;

export const P = styled.p`
  font-size: 1.1rem;
  position: relative;
  opacity: 0.5;

  @media ${DEVICE.minDesktop} {
    font-size: 1.6rem;
  }

  &:before,
  &:after {
    position: absolute;
    top: 50%;
    transform: translateY(-47.5%);
  }

  ${(props) =>
    props.next &&
    css`
      &:after {
        content: " >";
        right: -1.5rem;
      }
    `}

  ${(props) =>
    props.prev &&
    css`
      &:before {
        content: "< ";
        left: -1.5rem;
      }
    `}
`;
