import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import emotionStyled from "@emotion/styled";

import { TermsOfServiceTextArea } from "@component/SignUp/TermsOfService/TermsOfServiceTextArea";
import { SignUpForm } from "@component/SignUp/Form";
import { LABELS } from "@component/SignUp/TermsOfService/const";
import { Center } from "@component/0min/Center";

export const TermsOfServiceForm = () => {
  return (
    <S.Padding>
      <Center>
        <SignUpForm>
          <SignUpForm.Title>회원가입</SignUpForm.Title>
          <SignUpForm.Content>
            <CustomFormGroup>
              {LABELS.map(({ label, guideMessage, content }) => (
                <S.FormInputContainer>
                  <FormControlLabel
                    key={label}
                    label={<Typography fontWeight="bold">{label}</Typography>}
                    control={
                      label === "전체 동의 하기" ? (
                        <Checkbox size="medium" />
                      ) : (
                        <Checkbox size="small" />
                      )
                    }
                  />
                  <Typography>{guideMessage}</Typography>
                  {content && (
                    <TermsOfServiceTextArea
                      datas={["약관 전문 보기", content]}
                    />
                  )}
                </S.FormInputContainer>
              ))}
            </CustomFormGroup>
          </SignUpForm.Content>
        </SignUpForm>
      </Center>
    </S.Padding>
  );
};

const CustomFormGroup = styled(FormGroup)`
  flex-direction: column;
  gap: 40px;
`;

const S = {
  FormContainer: emotionStyled.form`
    display: 
  `,
  FormInputContainer: emotionStyled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
  `,
  ButtonContainer: emotionStyled.div`
    text-align: center;
  `,
  Padding: emotionStyled.div`
    padding-bottom: 106px;
  `,
};
