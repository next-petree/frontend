import React, { HTMLAttributes } from "react";
import { LinkProps } from "react-router-dom";
import * as S from "./style";
import { ReactComponent as LogoPawPrimary } from "@assets/images/logo_paw_primary.svg";
import { ReactComponent as LogoTextPrimary } from "@assets/images/logo_text_primary.svg";
import { ReactComponent as LogoPawWhite } from "@assets/images/logo_paw_white.svg";
import { ReactComponent as LogoTextWhite } from "@assets/images/logo_text_white.svg";

export interface Props
  extends Omit<LinkProps, "to">,
    HTMLAttributes<HTMLAnchorElement> {
  color?: "primary" | "white";
  size?: "small" | "medium" | "large";
}
export const Logo = ({
  color = "primary",
  size = "small",
  ...props
}: Props) => {
  const checkColor = color === "primary";
  return (
    <S.Container data-testid="main-logo" to="/" size={size} {...props}>
      {checkColor && (
        <>
          {" "}
          <LogoPawPrimary />
          <LogoTextPrimary />
        </>
      )}
      {!checkColor && (
        <>
          {" "}
          <LogoPawWhite />
          <LogoTextWhite />
        </>
      )}
    </S.Container>
  );
};
