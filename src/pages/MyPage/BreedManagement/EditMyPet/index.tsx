import React, { FC } from "react";
import * as S from "../../MyPageStyle";
import LeftMenuBar from "@component/MyPage/LeftMenuBar/LeftMenuBar";
import AddOrEditMyPet from "@component/MyPage/MyPetManagement/AddOrEditMyPet/AddOrEditMyPet";

const EditMyPet: FC = () => {
  return (
    <S.ContentContainer>
      <LeftMenuBar />
      <S.MainContent>
        <AddOrEditMyPet EditMode={true} />
      </S.MainContent>
    </S.ContentContainer>
  );
};

export default EditMyPet;
