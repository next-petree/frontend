import React, { FC } from "react";
import * as S from "../../MyPageStyle";
import LeftMenuBar from "@component/MyPage/LeftMenuBar/LeftMenuBar";

const BreederApplicationHistory: FC = () => {
  return (
    <S.ContentContainer>
      <LeftMenuBar />
      <S.MainContent></S.MainContent>
    </S.ContentContainer>
  );
};

export default BreederApplicationHistory;
