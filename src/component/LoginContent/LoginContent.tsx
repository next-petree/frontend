import React from "react";
import {
  Container,
  ContentArea,
  PetTreeTitleArea,
  PetTreeIcon,
  Title,
  SubTitle1,
  SubTitle2,
  EmailFormArea,
  EmailText,
  EmailInputForm,
  PassWordFormArea,
  PassWordText,
  PassWordForm,
  FindIdOrPassWordArea,
  FindIdButton,
  FindPassWordButton,
  LoginOrSignUpButtonArea,
  BasicLoginButton,
  KakaoLoginButton,
  SignUpButtonArea,
  SignUpButton,
} from "./LoginContentStyle";

const LoginContent = () => {
  return (
    <Container>
      <PetTreeTitleArea>
        <PetTreeIcon />
        <Title>펫트리</Title>
      </PetTreeTitleArea>

      <SubTitle1>반려동물, 새로운 당신의 가족입니다</SubTitle1>
      <SubTitle2>또 하나의 가족 반려동물을 분양하세요</SubTitle2>

      <ContentArea>
        <EmailFormArea>
          <EmailText>이메일</EmailText>
          <EmailInputForm></EmailInputForm>
        </EmailFormArea>
        <PassWordFormArea>
          <PassWordText>비밀번호</PassWordText>
          <PassWordForm></PassWordForm>
        </PassWordFormArea>

        <FindIdOrPassWordArea>
          <FindIdButton>아이디</FindIdButton> /
          <FindPassWordButton>비밀번호</FindPassWordButton>
          찾기
        </FindIdOrPassWordArea>

        <LoginOrSignUpButtonArea>
          <BasicLoginButton>로그인</BasicLoginButton>
          <KakaoLoginButton>카카오 로그인</KakaoLoginButton>
          <SignUpButtonArea>
            아직 회원이 아니라면?
            <SignUpButton>회원가입</SignUpButton>
          </SignUpButtonArea>
        </LoginOrSignUpButtonArea>
      </ContentArea>
    </Container>
  );
};

export default LoginContent;
