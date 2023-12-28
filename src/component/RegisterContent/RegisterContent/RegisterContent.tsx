import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import alertList from "../../../utils/Swal1";

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
import DropUpButton from "../../../assets/icons/Group 51.png";
import RegisterSequenceImage from "../../../assets/images/register-sequence.png";

const RegisterContent = () => {
  const [checkboxes, setCheckboxes] = useState({
    agreeAll: false,
    terms: false,
    personalInformation: false,
    locationBasedService: false,
  });

  const [isTermsDropdownOpen, setIsTermsDropdownOpen] = useState(false);
  const [isPersonalInfoDropdownOpen, setIsPersonalInfoDropdownOpen] =
    useState(false);
  const [isLocationServiceDropdownOpen, setIsLocationServiceDropdownOpen] =
    useState(false);

  const toggleTermsDropdown = () => {
    setIsTermsDropdownOpen(!isTermsDropdownOpen);
  };

  const togglePersonalInfoDropdown = () => {
    setIsPersonalInfoDropdownOpen(!isPersonalInfoDropdownOpen);
  };

  const toggleLocationServiceDropdown = () => {
    setIsLocationServiceDropdownOpen(!isLocationServiceDropdownOpen);
  };

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
      Swal.fire(alertList.infoMessage("모든 항목에 동의해주세요."));
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
          <DropDown onClick={toggleTermsDropdown}>
            {!isTermsDropdownOpen && (
              <>
                <span>약관 전문 보기</span>
                <img src={DropDownButton} alt="DropDown button" />
              </>
            )}
            {isTermsDropdownOpen && (
              <>
                <span>
                  이용약관
                  <br />
                  <br /> 제 1 조 (목적) 본 약관은 {"<펫트리>"}(이하
                  '펫트리')은(는)의 제반 서비스의 이용조건 및 절차에 관한 사항
                  및 기타 필요한 사항을 규정함을 목적으로 합니다.
                  <br />제 2 조 (용어의 정의) 본 약관에서 사용하는 용어는 다음과
                  같이 정의 합니다.
                  <br />
                  ①회원 : 기본 회원 정보를 입력하였고, 회사와 서비스 이용계약을
                  체결하여 아이디를 부여받은 개인 <br />
                  ②아이디(ID) : 회원식별과 회원의 서비스 이용을 위해 회원이
                  선정하고 회사가 승인하는 문자와 숫자의 조합
                  <br />
                  ③비밀번호(Password) : 회원이 통신상의 자신의 비밀을 보호하기
                  위해 선정한 문자와 숫자의 조합
                </span>
                <img src={DropUpButton} alt="DropUp button" />
              </>
            )}
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
          <DropDown onClick={togglePersonalInfoDropdown}>
            {!isPersonalInfoDropdownOpen && (
              <>
                <span>약관 전문 보기</span>
                <img src={DropDownButton} alt="DropDown button" />
              </>
            )}
            {isPersonalInfoDropdownOpen && (
              <>
                <span>
                  개인정보 수집 및 이용
                  <br />
                  <br /> 제1조(개인정보의 처리 목적) 이하 '펫트리'은(는) 다음의
                  목적을 위하여 개인정보를 처리합니다.
                  <br />
                  처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지
                  않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」
                  제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
                  예정입니다. <br />
                  1. 홈페이지 회원가입 및 관리 회원 가입의사 확인, 회원제 서비스
                  제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스
                  부정이용 방지, 만14세 미만 아동의 개인정보 처리 시
                  법정대리인의 동의여부 확인, 각종 고지·통지 목적으로 개인정보를
                  처리합니다.
                </span>
                <img src={DropUpButton} alt="DropUp button" />
              </>
            )}
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
          <DropDown onClick={toggleLocationServiceDropdown}>
            {!isLocationServiceDropdownOpen && (
              <>
                <span>약관 전문 보기</span>
                <img src={DropDownButton} alt="DropDown button" />
              </>
            )}
            {isLocationServiceDropdownOpen && (
              <>
                <span>
                  개인정보 제 3자 제공 동의 <br /> <br /> 제 1 조 (목적) 본
                  약관은 {"<펫트리>"}(이하 '펫트리')은(는)의 제반 서비스의
                  이용조건 및 절차에 관한 사항 및 기타 필요한 사항을 규정함을
                  목적으로 합니다. <br />제 2 조 (용어의 정의) 본 약관에서
                  사용하는 용어는 다음과 같이 정의 합니다. <br /> ①회원 : 기본
                  회원 정보를 입력하였고, 회사와 서비스 이용계약을 체결하여
                  아이디를 부여받은 개인 <br />
                  ②아이디(ID) : 회원식별과 회원의 서비스 이용을 위해 회원이
                  선정하고 회사가 승인하는 문자와 숫자의 조합
                  <br />
                  ③비밀번호(Password) : 회원이 통신상의 자신의 비밀을 보호하기
                  위해 선정한 문자와 숫자의 조합
                </span>
                <img src={DropUpButton} alt="DropUp button" />
              </>
            )}
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
