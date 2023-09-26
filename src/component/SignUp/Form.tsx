import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import type { PropsWithChildren } from "react";

const SignUpFormContainer = ({ children }: PropsWithChildren) => {
  return <S.SignUpForm>{children}</S.SignUpForm>;
};

const SignUpFormContent = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

const SignUpFormHeader = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

const SignUpFormTitle = ({ children }: PropsWithChildren) => {
  return (
    <S.SignUpTitleWrap>
      <Typography component="h1" fontSize={28} fontWeight="bold">
        {children}
      </Typography>
    </S.SignUpTitleWrap>
  );
};

export const SignUpForm = Object.assign(SignUpFormContainer, {
  Header: SignUpFormHeader,
  Content: SignUpFormContent,
  Title: SignUpFormTitle,
});

const S = {
  SignUpForm: styled.form`
    width: 823px;
  `,
  SignUpTitleWrap: styled.div`
    margin-bottom: 62px;
  `,
};
