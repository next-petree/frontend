import React, { FC } from "react";
import * as S from "../UserProfileEditStyle";
import LeftMenuBar from "@component/MyPage/LeftMenuBar/LeftMenuBar";
import UserProfileEdit from "@component/MyPage/UserProfileEdit/UserProfileEdit";
import PasswordUpdate from "@component/MyPage/PasswordUpdate/PasswordUpdate";

const BreederProfileEdit: FC = () => {
  return (
    <S.ContentContainer>
      <LeftMenuBar />
      <UserProfileEdit />
      <PasswordUpdate />
    </S.ContentContainer>
  );
};

export default BreederProfileEdit;
