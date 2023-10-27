import React from "react";
import {
  Container,
  ContentArea,
  FindEmailTitle,
  CharacterImage,
  InnerContentArea,
  NameFormArea,
  PhoneNumberFormArea,
  PhoneNumberCheckFormArea,
  NameText,
  PhoneNumberText,
  NameForm,
  PhoneNumberForm,
  PhoneNumberCheckForm,
  PhoneNumberSendButton,
  PhoneNumberCheckButton,
  FindPassWordButtonArea,
  FindPassWordButton,
  CheckButtonArea,
  CheckButton,
} from "./FindEmailContentStyle";

const FindEmailContent = () => {
  return (
    <Container>
      <FindEmailTitle>이메일 찾기</FindEmailTitle>
      <ContentArea>
        <CharacterImage />
        <InnerContentArea>
          <NameFormArea>
            <NameText>이름</NameText>
            <NameForm></NameForm>
          </NameFormArea>

          <PhoneNumberFormArea>
            <PhoneNumberText>연락처</PhoneNumberText>
            <PhoneNumberForm></PhoneNumberForm>
            <PhoneNumberSendButton>인증 요청</PhoneNumberSendButton>
          </PhoneNumberFormArea>

          <PhoneNumberCheckFormArea>
            <PhoneNumberCheckForm></PhoneNumberCheckForm>
            <PhoneNumberCheckButton>인증 확인</PhoneNumberCheckButton>
          </PhoneNumberCheckFormArea>

          <FindPassWordButtonArea>
            <FindPassWordButton>비밀번호 찾기</FindPassWordButton>
          </FindPassWordButtonArea>
        </InnerContentArea>
      </ContentArea>

      <CheckButtonArea>
        <CheckButton>확인</CheckButton>
      </CheckButtonArea>
    </Container>
  );
};

export default FindEmailContent;
