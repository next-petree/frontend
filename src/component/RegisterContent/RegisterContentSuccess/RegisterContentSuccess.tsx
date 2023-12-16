import React from "react";

import {
  Container,
  RegisterSequence,
  RegisterSequenceStyle,
  MainImageArea,
  MainImageStyle,
  FootImageStyle,
  SuccessTextArea,
  SuccessText,
  RegisterButtonContainer,
  RegisterButton,
} from "./RegisterContentSucessStyle";

import RegisterSequenceImage3 from "../../../assets/images/register-sequence3.png";
import FootprintImage from "../../../assets/images/Group 8.png";
import MainImage from "../../../assets/images/PETREE 1.png";

const RegisterContentSuccess = () => {
  return (
    <Container>
      <RegisterSequence>
        <RegisterSequenceStyle
          src={RegisterSequenceImage3}
          alt="Last RegisterSequence"
        />
      </RegisterSequence>
      <MainImageArea>
        <FootImageStyle src={FootprintImage} alt="FootPrint Image" />
        <MainImageStyle src={MainImage} alt="Success Register Image" />
      </MainImageArea>
      <SuccessTextArea>
        <SuccessText>회원가입이 완료되었습니다!</SuccessText>
      </SuccessTextArea>
      <RegisterButtonContainer>
        <RegisterButton to="/login">로그인</RegisterButton>
      </RegisterButtonContainer>
    </Container>
  );
};

export default RegisterContentSuccess;
