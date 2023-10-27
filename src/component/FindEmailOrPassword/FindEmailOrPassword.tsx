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
  FindPasswordButtonArea,
  FindPasswordButton,
  FindEmailButton,
  CheckButtonArea,
  CheckButton,
} from "./FindEmailOrPasswordStyle";

type Props = {
  pageType: "findemail" | "findpassword";
};

const FindEmailOrPasswordContent = ({ pageType }: Props) => {
  return (
    <Container>
      <FindEmailTitle>
        {pageType === "findemail" ? "이메일 찾기" : "비밀번호 찾기"}
      </FindEmailTitle>
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

          <FindPasswordButtonArea>
            {pageType === "findemail" ? (
              <FindPasswordButton to="/findpassword">
                비밀번호 찾기
              </FindPasswordButton>
            ) : (
              <FindEmailButton to="/findemail">이메일 찾기</FindEmailButton>
            )}
          </FindPasswordButtonArea>
        </InnerContentArea>
      </ContentArea>

      <CheckButtonArea>
        <CheckButton>확인</CheckButton>
      </CheckButtonArea>
    </Container>
  );
};

export default FindEmailOrPasswordContent;
