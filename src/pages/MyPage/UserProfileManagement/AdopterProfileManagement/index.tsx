import React, { FC } from "react";
import * as S from "../../MyPageStyle";
import LeftMenuBar from "@component/MyPage/LeftMenuBar/LeftMenuBar";
import ProfileManagement from "@component/MyPage/ProfileManagement/ProfileManagement";
import LivingEnvironment from "@component/MyPage/LivingEnvironment/LivingEnvironment";

const AdopterProfileManagement: FC = () => {
  return (
    <S.ContentContainer>
      <LeftMenuBar />
      <S.MainContent>
        <ProfileManagement />
        <LivingEnvironment />
      </S.MainContent>
    </S.ContentContainer>
  );
};

export default AdopterProfileManagement;
