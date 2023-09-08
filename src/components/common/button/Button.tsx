import React, { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export enum ButtonSize {
  XLARGE,
  LARGE,
  MEDIUM,
  SMALL,
}

export enum ButtonColor {
  MINT,
  GRAY,
  DARKGRAY,
  BLACK,
  YELLOW,
  TRANSPARENT,
}

export enum ButtonStyle {
  DEFAULT,
  OUTLINE,
}

const buttonStyles = {
  [ButtonStyle.DEFAULT]: 0,
  [ButtonStyle.OUTLINE]: 0.125,
};

const buttonWidths = {
  [ButtonSize.XLARGE]: 30,
  [ButtonSize.LARGE]: 20,
  [ButtonSize.MEDIUM]: 15,
  [ButtonSize.SMALL]: 7.5,
};

const textSizes = {
  [ButtonSize.XLARGE]: 1.5,
  [ButtonSize.LARGE]: 1.5,
  [ButtonSize.MEDIUM]: 1.5,
  [ButtonSize.SMALL]: 1,
};

const borderRadius = {
  [ButtonStyle.DEFAULT]: 1,
  [ButtonStyle.OUTLINE]: 2,
};

const backgroundColors = {
  [ButtonColor.MINT]: '#4EC1BF',
  [ButtonColor.GRAY]: '#B7B7B7',
  [ButtonColor.DARKGRAY]: '#707070',
  [ButtonColor.BLACK]: '#2F2F2F',
  [ButtonColor.YELLOW]: '#FFD540',
  [ButtonColor.TRANSPARENT]: 'transparent !important',
};

const hoverColors = {
  [ButtonColor.MINT]: '#35D8D5',
  [ButtonColor.GRAY]: '#B7B7B7',
  [ButtonColor.DARKGRAY]: '#707070',
  [ButtonColor.BLACK]: '#2F2F2F',
  [ButtonColor.YELLOW]: '#FFD540',
  [ButtonColor.TRANSPARENT]: 'transparent !important',
};

interface IButton {
  buttonSize?: ButtonSize;
  buttonColor?: ButtonColor;
  buttonStyle?: ButtonStyle;
  children: React.ReactNode;
}

export default function Button({
  buttonSize = ButtonSize.XLARGE,
  buttonColor = ButtonColor.MINT,
  buttonStyle = ButtonStyle.DEFAULT,
  children,
  ...props
}: IButton & HTMLAttributes<HTMLButtonElement>) {
  return (
    <Container type="button" buttonSize={buttonSize} buttonColor={buttonColor} buttonStyle={buttonStyle} {...props}>
      {children}
    </Container>
  );
}

const Container = styled.button<{ buttonSize: ButtonSize; buttonColor: ButtonColor; buttonStyle: ButtonStyle }>`
  display: flex;
  height: 3.315rem;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border-radius: 1rem;

  cursor: pointer;

  ${({ buttonColor }) => css`
    background-color: ${backgroundColors[buttonColor]};
    &:hover,
    &:focus {
      background-color: ${hoverColors[buttonColor]};
    }
  `}

  ${({ buttonSize }) => css`
    width: ${buttonWidths[buttonSize]}rem;
    font-size: ${textSizes[buttonSize]}rem;
  `}

  ${({ buttonStyle }) => css`
    border: ${buttonStyles[buttonStyle]}rem solid #ffffff;
    border-radius: ${borderRadius[buttonStyle]}rem;
  `}
`;
