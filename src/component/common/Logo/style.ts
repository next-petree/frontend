import { HTMLAttributes } from "react";
import { Link, LinkProps } from "react-router-dom";
import { css, styled } from "styled-components";
import { Props } from ".";

export const Container = styled(Link)<Pick<Props, "size">>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  ${({ size }) =>
    size === "large"
      ? css`
          flex-direction: column;
          svg:first-child {
            width: 127px;
            height: 127px;
          }
          svg:last-child {
            width: 197.407px;
            height: 64.841px;
          }
        `
      : size === "medium"
      ? css`
          svg:first-child {
            width: 75px;
            height: 75px;
          }
          svg:last-child {
            width: 152px;
            height: 50px;
          }
        `
      : size === "small" &&
        css`
          svg:first-child {
            width: 36px;
            height: 36px;
          }
          svg:last-child {
            width: 54px;
            height: 18px;
          }
        `}
`;
