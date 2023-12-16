import React from "react";
import {
  Container,
  CharacterImage,
  ChangePasswordTitle,
  PasswordInputArea,
  NewPasswordArea,
  NewPasswordText,
  NewPasswordInput,
  CheckPasswordArea,
  CheckPasswordText,
  CheckPasswordInput,
  CheckButton,
} from "./ChangePasswordContentStyle";

const ChangePasswordContent = () => {
  return (
    <Container>
      <CharacterImage />
      <ChangePasswordTitle>비밀번호 변경하기</ChangePasswordTitle>
      <PasswordInputArea>
        <NewPasswordArea>
          <NewPasswordText>새 비밀번호</NewPasswordText>
          <NewPasswordInput type="password"></NewPasswordInput>
        </NewPasswordArea>

        <CheckPasswordArea>
          <CheckPasswordText>비밀번호 확인</CheckPasswordText>
          <CheckPasswordInput type="password"></CheckPasswordInput>
        </CheckPasswordArea>
      </PasswordInputArea>

      <CheckButton to="/changepasswordresult">확인</CheckButton>
    </Container>
  );
};

export default ChangePasswordContent;
