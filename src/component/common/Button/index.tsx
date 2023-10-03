import React, { ButtonHTMLAttributes } from "react";
import * as S from "./style";
import { BTNSIZE, COLOR, FONT } from "@assets/constant/style";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  fontSize?: string;
  buttonSize?: string;
  backgroundColor?: string;
  hoverColor?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
const Button = ({
  label,
  fontSize,
  buttonSize,
  backgroundColor,
  hoverColor,
  onClick,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <S.ButtonWrapper
      label={label}
      fontSize={fontSize}
      buttonSize={buttonSize}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </S.ButtonWrapper>
  );
};

Button.defaultProps = {
  fontSize: COLOR.white,
  buttonSize: BTNSIZE.md,
  backgroundColor: COLOR.primary,
};

export default Button;
