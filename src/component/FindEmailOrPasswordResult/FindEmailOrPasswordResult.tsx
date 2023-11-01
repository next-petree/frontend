import React from "react";
import {
  Container,
  CharacterImage,
  ResultTitle,
  ResultFormArea,
  ResultText,
  ResultForm,
  ButtonArea,
  LoginPageButton,
  FindPassword,
  FindEmail,
} from "./FindEmailOrPasswordResultStyle";

type Props = {
  pageType: "findemailresult" | "findpasswordresult";
};

const FindEmailOrPasswordResult = ({ pageType }: Props) => {
  return (
    <Container>
      <CharacterImage />
      <ResultTitle>
        {pageType === "findemailresult"
          ? "이메일 찾기 완료"
          : "비밀번호 찾기 완료"}
      </ResultTitle>
      <ResultFormArea>
        <ResultText>이메일</ResultText>
        <ResultForm type="text" disabled></ResultForm>
      </ResultFormArea>
      <ButtonArea>
        <LoginPageButton to="/login">로그인</LoginPageButton>
        {pageType === "findemailresult" ? (
          <FindPassword to="/findpassword">비밀번호 찾기</FindPassword>
        ) : (
          <FindEmail to="/findemail">이메일 찾기</FindEmail>
        )}
      </ButtonArea>
    </Container>
  );
};

export default FindEmailOrPasswordResult;
