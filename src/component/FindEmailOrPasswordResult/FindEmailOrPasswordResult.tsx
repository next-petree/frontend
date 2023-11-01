import React from "react";
import { useLocation } from "react-router-dom";

import {
  Container,
  CharacterImage,
  ResultTitle,
  ResultInputArea,
  ResultText,
  ResultInput,
  ButtonArea,
  LoginPageButton,
  FindPassword,
} from "./FindEmailOrPasswordResultStyle";

type Props = {
  pageType: "findemailresult" | "findpasswordresult";
};

const FindEmailOrPasswordResult = ({ pageType }: Props) => {
  const location = useLocation();
  const emailFromState = location.state?.email || "";

  return (
    <Container>
      <CharacterImage />
      <ResultTitle>
        {pageType === "findemailresult"
          ? "이메일 찾기 완료"
          : "비밀번호 찾기 완료"}
      </ResultTitle>
      <ResultInputArea>
        <ResultText>이메일</ResultText>
        <ResultInput type="text" disabled value={emailFromState}></ResultInput>
      </ResultInputArea>
      <ButtonArea>
        <LoginPageButton to="/login">로그인</LoginPageButton>
        {pageType === "findemailresult" && (
          <FindPassword to="/findpassword">비밀번호 찾기</FindPassword>
        )}
      </ButtonArea>
    </Container>
  );
};

export default FindEmailOrPasswordResult;
