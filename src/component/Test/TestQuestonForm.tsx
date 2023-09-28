import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export const TestQuestionFormContainer = ({ children }: PropsWithChildren) => {
  return <S.QuestionCardContainer>{children}</S.QuestionCardContainer>;
};

export const TestQuestionFormHeader = ({ children }: PropsWithChildren) => {
  return <S.QuestionCardHeader>{children}</S.QuestionCardHeader>;
};
export const TestQuestionFormFooter = ({ children }: PropsWithChildren) => {
  return <S.QuestionCardFooter>{children}</S.QuestionCardFooter>;
};

const TestQuestionFormTitle = ({ children }: PropsWithChildren) => {
  return (
    <S.QuestionOptionPill>
      <Typography component="h2" fontWeight={700}>
        {children}
      </Typography>
    </S.QuestionOptionPill>
  );
};

const TestQuestionFormContent = ({ children }: PropsWithChildren) => {
  return <S.QuestionCardContent>{children}</S.QuestionCardContent>;
};

const TestQuestionFormStep = ({ children }: PropsWithChildren) => {
  return (
    <Typography fontSize="21px" fontWeight={500}>
      {children}
    </Typography>
  );
};

const TestQuestionFormParagraph = ({ children }: PropsWithChildren) => {
  return (
    <Typography fontSize={"20px"} fontWeight={400}>
      {children}
    </Typography>
  );
};

interface TestQuestionFormOptionProps extends PropsWithChildren {
  checked: boolean;
}
const TestQuestionFormOption = ({
  children,
  checked,
}: TestQuestionFormOptionProps) => {
  return (
    <S.QuestionOptionRounded checked={checked}>
      <Typography>{children}</Typography>
    </S.QuestionOptionRounded>
  );
};

type QuestionOptionRoundedStyleProps = Pick<
  TestQuestionFormOptionProps,
  "checked"
>;

const S = {
  QuestionCardContainer: styled.main`
    box-sizing: border-box;
    max-width: 600px;

    border-radius: 40px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.12);
  `,

  QuestionCardHeader: styled.header`
    padding: 40px 75px 0px 75px;
  `,

  QuestionCardContent: styled.section`
    padding: 45px 95px 65px 95px;
  `,

  QuestionCardFooter: styled.footer`
    padding: 0px 50px 80px 50px;
  `,

  QuestionParagraph: styled.p`
    box-sizing: border-box;
  `,

  QuestionOptionPill: styled.div`
    padding: 10px 45px;
    overflow: hidden;
    box-sizing: border-box;

    width: 100%;
    text-align: center;
    border-radius: 32px;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.09);
  `,
  QuestionOptionRounded: styled.div<QuestionOptionRoundedStyleProps>`
    padding: 10px 45px;
    overflow: hidden;
    box-sizing: border-box;

    width: 100%;
    border: 1px solid red;
    border-radius: 20px;
    background-color: ${({ checked }) => checked && "yellow"};

    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  `,
};

export const TestQuestionForm = Object.assign(TestQuestionFormContainer, {
  Title: TestQuestionFormTitle,
  Header: TestQuestionFormHeader,
  Paragraph: TestQuestionFormParagraph,
  Step: TestQuestionFormStep,
  Content: TestQuestionFormContent,
  Option: TestQuestionFormOption,
  Footer: TestQuestionFormFooter,
});
