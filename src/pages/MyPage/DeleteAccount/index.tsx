import React, { FC } from "react";
import * as S from "../MyPageStyle";
import LeftMenuBar from "@component/MyPage/LeftMenuBar/LeftMenuBar";
import DeleteMyAccount from "@component/MyPage/DeleteMyAccount/DeleteMyAccount";

const BreedManagement: FC = () => {
  return (
    <S.ContentContainer>
      <LeftMenuBar />
      <S.MainContent>
        <DeleteMyAccount />
      </S.MainContent>
    </S.ContentContainer>
  );
};

export default BreedManagement;
