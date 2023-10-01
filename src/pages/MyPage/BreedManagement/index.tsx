import React, { FC } from "react";
import * as S from "../MyPageStyle";
import LeftMenuBar from "@component/MyPage/LeftMenuBar/LeftMenuBar";
import MyPetManagement from "@component/MyPage/MyPetManagement/MyPetManagement";

const BreedManagement: FC = () => {
  return (
    <S.ContentContainer>
      <LeftMenuBar />
      <S.MainContent>
        <MyPetManagement />
      </S.MainContent>
    </S.ContentContainer>
  );
};

export default BreedManagement;
