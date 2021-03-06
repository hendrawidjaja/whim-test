import styled, { css } from "styled-components";
import { flex } from "../../styles/base";

export const WrapperButtons = styled(flex)`
  margin-left: auto;
  justify-content: space-between;
`;

export const Button = styled.button`
  align-items: center;
  display: flex;
  position: relative;

  ${(props) =>
    !props.disabled
      ? css`
          cursor: pointer;
        `
      : css`
          opacity: 0.5;
        `}

  &:last-of-type {
    padding-left: 1rem;
    padding-right: 2rem;
  }
`;

export const P = styled.p`
  font-size: 1.6rem;
  position: relative;
  opacity: 0.6;

  &:hover {
    opacity: 1;
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
