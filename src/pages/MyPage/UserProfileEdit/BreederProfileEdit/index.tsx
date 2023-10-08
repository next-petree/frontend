import React, { FC } from "react";
import * as S from "../../MyPageStyle";
import LeftMenuBar from "@component/MyPage/LeftMenuBar/LeftMenuBar";
import UserProfileEdit from "@component/MyPage/UserProfileEdit/UserProfileEdit";
import PasswordUpdate from "@component/MyPage/PasswordUpdate/PasswordUpdate";

const BreederProfileEdit: FC = () => {
  return (
    <S.ContentContainer>
      <LeftMenuBar breeder={true} />
      <S.MainContent>
        <UserProfileEdit breeder={true} />
        <PasswordUpdate />
      </S.MainContent>
    </S.ContentContainer>
  );
};

export default BreederProfileEdit;
