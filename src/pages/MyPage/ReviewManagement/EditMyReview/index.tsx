import React, { FC } from "react";
import * as S from "../../MyPageStyle";
import LeftMenuBar from "@component/MyPage/LeftMenuBar/LeftMenuBar";
import AddOrEditMyReview from "@component/MyPage/MyReviewManagement/AddOrEditMyReview/AddOrEditMyReview";

const EditMyReview: FC = () => {
  return (
    <S.ContentContainer>
      <LeftMenuBar />
      <S.MainContent>
        <AddOrEditMyReview editMode={true} />
      </S.MainContent>
    </S.ContentContainer>
  );
};

export default EditMyReview;
