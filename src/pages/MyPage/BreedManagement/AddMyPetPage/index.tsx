import React, { FC } from "react";
import * as S from "../../MyPageStyle";
import LeftMenuBar from "@component/MyPage/LeftMenuBar/LeftMenuBar";
import AddOrEditMyPet from "@component/MyPage/MyPetManagement/AddOrEditMyPet/AddOrEditMyPet";

const AddMyPetPage: FC = () => {
  return (
    <S.ContentContainer>
      <LeftMenuBar />
      <S.MainContent>
        <AddOrEditMyPet />
      </S.MainContent>
    </S.ContentContainer>
  );
};

export default AddMyPetPage;
