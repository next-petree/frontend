import React, { FC } from "react";
import Header from "../header";
import Footer from "../footer";
import * as S from "./style";

interface Props {
  title?: string;
  children?: JSX.Element | JSX.Element[];
}

const Content: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Header />
      <S.StyledContent>
        {title && <S.Title>{title}</S.Title>}
        {children}
      </S.StyledContent>
      <Footer />
    </>
  );
};

export default Content;
