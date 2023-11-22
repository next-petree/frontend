import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  RegisterSequence,
  RegisterSequenceStyle,
  SelectArea,
  BreederButton,
  CustomerButton,
  TopContentArea,
  TopLeftContentArea,
  EmailArea,
  EmailTextArea,
  EmailText,
  EmailInfomationText,
  EmailInputArea,
  EmailInput,
  EmailCheckButton,
  PasswordArea,
  PasswordTextArea,
  PasswordText,
  PasswordInfomationText,
  PasswordInputArea,
  PasswordInput,
  PasswordCheckArea,
  PasswordCheckText,
  PasswordCheckInput,
  TopRightContentArea,
  MainBreedArea,
  MainBreedTextArea,
  MianBreedText,
  MainBreedInputArea,
  MainBreedInput,
  MainBreedSearchButton,
  NickNameArea,
  NickNameTextArea,
  NickNameText,
  NickNameInfomationText,
  NickNameInputArea,
  NickNameInput,
  NickNameCheckButton,
  BottomContentArea,
  BottomLeftContentArea,
  RegionSelectorArea,
  RegionSelectorTextArea,
  RegionSelectorText,
  RegionSelectorInputArea,
  RegionSelctorInputTop,
  RegionSelectorInput,
  RegionSearchButton,
  RegionSelctorInputBottom,
  RegionSectorDetailInput,
  BottomRightContentArea,
  PhoneNumberArea,
  PhoneNumberTextArea,
  PhoneNumberText,
  PhoneNumberInputTop,
  PhoneNumberInput,
  PhoneNumberButton,
  PhoneNumberInputBottom,
  PhoneNumberCheckInput,
  PhoneNumberCheckButton,
  RegisterButtonContainer,
  RegisterButton,
} from "./RegisterContentDetailStyle";

import RegisterSequenceImage2 from "../../../assets/images/register-sequence2.png";

const RegisterContentDetail = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/success-register");
  };
  return (
    <Container>
      <RegisterSequence>
        <RegisterSequenceStyle
          src={RegisterSequenceImage2}
          alt="Second RegisterSequence"
        />
      </RegisterSequence>
      <SelectArea>
        <BreederButton>브리더</BreederButton>
        <CustomerButton>분양희망자</CustomerButton>
      </SelectArea>
      <TopContentArea>
        <TopLeftContentArea>
          <EmailArea>
            <EmailTextArea>
              <EmailText>이메일</EmailText>
              <EmailInfomationText>2~10자 이내</EmailInfomationText>
            </EmailTextArea>
            <EmailInputArea>
              <EmailInput type="text" placeholder="breeder@email.com" />
              <EmailCheckButton>중복확인</EmailCheckButton>
            </EmailInputArea>
          </EmailArea>
          <PasswordArea>
            <PasswordTextArea>
              <PasswordText>비밀번호</PasswordText>
              <PasswordInfomationText>
                4~16자로 특수문자를 포함
              </PasswordInfomationText>
            </PasswordTextArea>
            <PasswordInputArea>
              <PasswordInput type="password" placeholder="비밀번호" />
            </PasswordInputArea>
          </PasswordArea>
          <PasswordCheckArea>
            <PasswordCheckText>비밀번호 확인</PasswordCheckText>
            <PasswordCheckInput type="password" placeholder="비밀번호" />
          </PasswordCheckArea>
        </TopLeftContentArea>
        <TopRightContentArea>
          <MainBreedArea>
            <MainBreedTextArea>
              <MianBreedText>주력견종</MianBreedText>
            </MainBreedTextArea>
            <MainBreedInputArea>
              <MainBreedInput
                type="text"
                placeholder="원하시는 견종을 입력해 주세요."
              />
              <MainBreedSearchButton>검색</MainBreedSearchButton>
            </MainBreedInputArea>
          </MainBreedArea>
          <NickNameArea>
            <NickNameTextArea>
              <NickNameText>닉네임</NickNameText>
              <NickNameInfomationText>2~10자 이내</NickNameInfomationText>
            </NickNameTextArea>
            <NickNameInputArea>
              <NickNameInput type="text" placeholder="닉네임 검색" />
              <NickNameCheckButton>중복확인</NickNameCheckButton>
            </NickNameInputArea>
          </NickNameArea>
        </TopRightContentArea>
      </TopContentArea>
      <BottomContentArea>
        <BottomLeftContentArea>
          <RegionSelectorArea>
            <RegionSelectorTextArea>
              <RegionSelectorText>활동지역</RegionSelectorText>
            </RegionSelectorTextArea>
            <RegionSelectorInputArea>
              <RegionSelctorInputTop>
                <RegionSelectorInput type="text" placeholder="주소" />
                <RegionSearchButton>주소검색</RegionSearchButton>
              </RegionSelctorInputTop>
              <RegionSelctorInputBottom>
                <RegionSectorDetailInput type="text" placeholder="상세주소" />
              </RegionSelctorInputBottom>
            </RegionSelectorInputArea>
          </RegionSelectorArea>
        </BottomLeftContentArea>
        <BottomRightContentArea>
          <PhoneNumberArea>
            <PhoneNumberTextArea>
              <PhoneNumberText>휴대전화</PhoneNumberText>
            </PhoneNumberTextArea>
            <PhoneNumberInputTop>
              <PhoneNumberInput type="text" placeholder="전화번호" />
              <PhoneNumberButton>인증요청</PhoneNumberButton>
            </PhoneNumberInputTop>
            <PhoneNumberInputBottom>
              <PhoneNumberCheckInput type="text" placeholder="인증번호" />
              <PhoneNumberCheckButton>확인</PhoneNumberCheckButton>
            </PhoneNumberInputBottom>
          </PhoneNumberArea>
        </BottomRightContentArea>
      </BottomContentArea>
      <RegisterButtonContainer>
        <RegisterButton onClick={handleNextClick}>가입하기</RegisterButton>
      </RegisterButtonContainer>
    </Container>
  );
};

export default RegisterContentDetail;
