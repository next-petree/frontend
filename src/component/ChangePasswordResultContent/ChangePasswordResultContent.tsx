import React from "react";
import {
  Container,
  CharacterImage,
  ChangePasswordResultTitle,
  CheckButton,
} from "./ChangePasswordResultContentStyle";

const ChangePasswordResultContent = () => {
  return (
    <Container>
      <CharacterImage />
      <ChangePasswordResultTitle>
        비밀번호가 변경되었습니다.
      </ChangePasswordResultTitle>
      <CheckButton to="/login">확인</CheckButton>
    </Container>
  );
};

export default ChangePasswordResultContent;
