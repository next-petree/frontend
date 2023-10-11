import { css, styled } from "styled-components";
import UNCHECK from "assets/images/signup/unCheck.svg";
import CHECK from "assets/images/signup/check.svg";
export enum Size {
  LARGE,
  SMALL,
}

const checkboxSize = {
  [Size.LARGE]: 1.75,
  [Size.SMALL]: 1.25,
};

const labelSize = {
  [Size.LARGE]: 1.25,
  [Size.SMALL]: 1,
};
export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0 1rem 0;
`;

export const Box = styled.input<{ size: Size }>`
  cursor: pointer;
  appearance: none;
  background: url(${UNCHECK}) no-repeat center/100%;
  ${({ size }) => css`
    width: ${checkboxSize[size]}rem;
    height: ${checkboxSize[size]}rem;
    &:checked {
      background: url(${CHECK}) no-repeat center/100%;
    }
  `};
`;

export const Label = styled.div<{ size: Size }>`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  ${({ size }) => css`
    font-size: ${labelSize[size]}rem;
  `};
  margin-left: 1rem;
`;
