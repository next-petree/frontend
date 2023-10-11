import React, { FC } from "react";
import { ReactComponent as BadgeSvg } from "@assets/images/badge.svg";
import * as S from "./style";
export const Badge = () => {
  return (
    <S.BadgeContainer>
      <BadgeSvg />
    </S.BadgeContainer>
  );
};
