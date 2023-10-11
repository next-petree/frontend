import { styled } from "styled-components";
import { PropsWithChildren } from "react";

interface ProgressLineProps extends PropsWithChildren {
  isShow: boolean;
}
export const ProgressLine = ({ children, isShow }: ProgressLineProps) => {
  return (
    <S.Relative>
      {children}
      {isShow && <S.ProgressLine />}
    </S.Relative>
  );
};

const S = {
  ProgressLine: styled.span`
    position: absolute;
    left: 100%;
    width: 200%;
    top: 50%;
    height: 2px;

    background-color: black;
  `,
  Relative: styled.span`
    position: relative;
  `,
};
