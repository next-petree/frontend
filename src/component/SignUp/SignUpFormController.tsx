import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useState } from "react";

import { ProgressGroup } from "@component/SignUp/ProgressStep/ProgressStepGroup";
import { EnterInformationForm } from "@component/SignUp/EnterInformation/EnterInformationForm";
import { SignUpResult } from "@component/SignUp/Result";
import { TermsOfServiceForm } from "@component/SignUp/TermsOfService/TermsOfServiceForm";

const SignUpForms = [
  <TermsOfServiceForm />,
  <EnterInformationForm />,
  <SignUpResult />,
] as const;

export const SignUpFormController = () => {
  const [step, setStep] = useState<number>(0);
  const scrollToTopSmooth = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const onClick = () => {
    setStep((currentStep) => {
      return currentStep >= SignUpForms.length - 1 ? 0 : currentStep + 1;
    });
    scrollToTopSmooth();
  };

  return (
    // <S.Center>
    <S.SignUpSection>
      <ProgressGroup />
      {SignUpForms[step]}
      <S.SignUpFooter>
        <S.SignUpBottom>
          <Button variant="contained" size="large" onClick={onClick}>
            텍스트바꿔주자
          </Button>
        </S.SignUpBottom>
      </S.SignUpFooter>
    </S.SignUpSection>
  );
};

const S = {
  SignUpSection: styled.section``,

  SignUpBottom: styled.div`
    text-align: center;
  `,
  SignUpFooter: styled.footer`
    margin-bottom: 127px;
  `,
};
