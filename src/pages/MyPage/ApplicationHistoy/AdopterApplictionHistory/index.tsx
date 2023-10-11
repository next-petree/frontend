import React, { FC } from "react";
import * as S from "../../MyPageStyle";
import LeftMenuBar from "@component/MyPage/LeftMenuBar/LeftMenuBar";
import AdopterMyApplicationHistory from "@component/MyPage/MyApplicationHistory/AdopterMyApplicationHistory/AdopterMyApplicationHistory";

const AdopterApplicationHistory: FC = () => {
  return (
    <S.ContentContainer>
      <LeftMenuBar />
      <S.MainContent>
        <AdopterMyApplicationHistory />
      </S.MainContent>
    </S.ContentContainer>
  );
};

export default AdopterApplicationHistory;
