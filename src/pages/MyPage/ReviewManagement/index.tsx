import React, { FC } from "react";
import * as S from "../MyPageStyle";
import LeftMenuBar from "@component/MyPage/LeftMenuBar/LeftMenuBar";
import MyReviewManagement from "@component/MyPage/MyReviewManagement/MyReviewManagement";

const ReviewManagement: FC = () => {
  return (
    <S.ContentContainer>
      <LeftMenuBar />
      <S.MainContent>
        <MyReviewManagement />
      </S.MainContent>
    </S.ContentContainer>
  );
};

export default ReviewManagement;
