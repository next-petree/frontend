import React, { FC } from "react";
import * as S from "../../MyPageStyle";
import LeftMenuBar from "@component/MyPage/LeftMenuBar/LeftMenuBar";
import BreederMyApplicationHistory from "@component/MyPage/MyApplicationHistory/BreederMyApplicationHistory/BreederMyApplicationHistory";

const BreederApplicationHistory: FC = () => {
  return (
    <S.ContentContainer>
      <LeftMenuBar />
      <S.MainContent>
        <BreederMyApplicationHistory />
      </S.MainContent>
    </S.ContentContainer>
  );
};

export default BreederApplicationHistory;
