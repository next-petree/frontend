import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import alertList from "../../../utils/swal";

import {
  Container,
  RegisterSequence,
  RegisterSequenceStyle,
  InnerContent,
  TitleArea,
  Title,
  AgreeAllArea,
  AgreeAllContent,
  AgreeAllCheckInput,
  AgreeAllTitle,
  AgreeAllText,
  TermsArea,
  TermsContent,
  TermsCheckInput,
  TermsTitle,
  DropDown,
  PersonalInfomationArea,
  PersonalInfomationContent,
  PersonalInfomationCheckInput,
  PersonalInfomationTitle,
  LocationBasedServiceArea,
  LocationBasedServiceContent,
  LocationBasedServiceCheckInput,
  LocationBasedServiceTitle,
  NextButtonContainer,
  NextButton,
} from "./RegisterContentStyle";

import DropDownButton from "../../../assets/icons/Group 5.png";
import RegisterSequenceImage from "../../../assets/images/register-sequence.png";

const RegisterContent = () => {
  const [checkboxes, setCheckboxes] = useState({
    agreeAll: false,
    terms: false,
    personalInformation: false,
    locationBasedService: false,
  });

  const handleAgreeAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setCheckboxes({
      agreeAll: checked,
      terms: checked,
      personalInformation: checked,
      locationBasedService: checked,
    });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setCheckboxes(prev => {
      const updatedCheckboxes = { ...prev, [name]: checked };

      const allChecked =
        name === "agreeAll"
          ? checked
          : Object.entries(updatedCheckboxes)
              .filter(([key]) => key !== "agreeAll")
              .every(([, value]) => value);

      return { ...updatedCheckboxes, agreeAll: allChecked };
    });
  };

  const navigate = useNavigate();

  const handleNextClick = () => {
    if (Object.values(checkboxes).every(Boolean)) {
      navigate("/register-detail");
    } else {
      Swal.fire({
        ...alertList.infoMessage("모든 항목에 동의해주세요."),
      });
    }
  };

  return (
    <Container>
      <RegisterSequence>
        <RegisterSequenceStyle
          src={RegisterSequenceImage}
          alt="First RegisterSequence"
        />
      </RegisterSequence>
      <InnerContent>
        <TitleArea>
          <Title>회원가입</Title>
        </TitleArea>
        <AgreeAllArea>
          <AgreeAllContent>
            <AgreeAllCheckInput
              onChange={handleAgreeAllChange}
              checked={checkboxes.agreeAll}
            />
            <AgreeAllTitle>전체 동의하기</AgreeAllTitle>
          </AgreeAllContent>
          <AgreeAllText>
            이용약관, 개인정보 수집 및 이용, 위치기반서비스 이용 약관을
            포함합니다.
          </AgreeAllText>
        </AgreeAllArea>
        <TermsArea>
          <TermsContent>
            <TermsCheckInput
              onChange={handleCheckboxChange}
              checked={checkboxes.terms}
              name="terms"
            />
            <TermsTitle>이용약관</TermsTitle>
          </TermsContent>
          <DropDown>
            <span>약관 전문 보기</span>
            <img src={DropDownButton} alt="DropDown button" />
          </DropDown>
        </TermsArea>
        <PersonalInfomationArea>
          <PersonalInfomationContent>
            <PersonalInfomationCheckInput
              onChange={handleCheckboxChange}
              checked={checkboxes.personalInformation}
              name="personalInformation"
            />
            <PersonalInfomationTitle>
              개인정보 수집 및 이용
            </PersonalInfomationTitle>
          </PersonalInfomationContent>
          <DropDown>
            <span>약관 전문 보기</span>
            <img src={DropDownButton} alt="DropDown button" />
          </DropDown>
        </PersonalInfomationArea>
        <LocationBasedServiceArea>
          <LocationBasedServiceContent>
            <LocationBasedServiceCheckInput
              onChange={handleCheckboxChange}
              checked={checkboxes.locationBasedService}
              name="locationBasedService"
            />
            <LocationBasedServiceTitle>
              위치기반서비스 이용 약관
            </LocationBasedServiceTitle>
          </LocationBasedServiceContent>
          <DropDown>
            <span>약관 전문 보기</span>
            <img src={DropDownButton} alt="DropDown button" />
          </DropDown>
        </LocationBasedServiceArea>
      </InnerContent>

      <NextButtonContainer>
        <NextButton onClick={handleNextClick}>다음</NextButton>
      </NextButtonContainer>
    </Container>
  );
};

export default RegisterContent;
