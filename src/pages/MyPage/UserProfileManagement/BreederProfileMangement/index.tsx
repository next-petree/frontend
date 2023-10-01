import React, { FC } from "react";
import * as S from "../../MyPageStyle";
import LeftMenuBar from "@component/MyPage/LeftMenuBar/LeftMenuBar";
import ProfileManagement from "@component/MyPage/ProfileManagement/ProfileManagement";
import MainBreed from "@component/MyPage/MainBreed/MainBreed";

const BreederProfileManagement: FC = () => {
  return (
    <S.ContentContainer>
      <LeftMenuBar />
      <S.MainContent>
        <ProfileManagement />
        <MainBreed />
      </S.MainContent>
    </S.ContentContainer>
  );
};

export default BreederProfileManagement;
