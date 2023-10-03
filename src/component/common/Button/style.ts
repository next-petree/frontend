import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const ButtonWrapper = styled.button<ButtonProps>`
  ${({ fontSize, buttonSize, backgroundColor, hoverColor }) => css`
    font-size: ${fontSize};
    width: ${buttonSize};
    background-color: ${backgroundColor};
    color: white;
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    border-radius: 16px;
    transition: background-color 0.3s;
    &:hover {
      background-color: ${hoverColor};
    }
  `}
`;
