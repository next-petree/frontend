import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";

import CustomLayout from "../../Layout/CustomLayout";
import WhiteBox from "../../../component/WhiteBox/WhiteBox";

import { BreederBadge } from "../../../assets/icons";

import { agreementInfo } from "../../../constants";
import * as S from "./styles";

const BreedingRegister = () => {
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);

  const location = useLocation();

  const { data } = location.state;

  const navigate = useNavigate();

  const handleAgreementClick = () => {
    setIsAgreeChecked((prev) => !prev);
  };

  const handleNextButtonClick = () => {
    navigate("/register-fillout", { state: data });
  };

  const handleCancelClick = () => {
    navigate(-1);
  };

  return (
    <CustomLayout height={1185}>
      <S.InnerContainer>
        <S.InfoContainer>
          <S.Headline textsize={28}>분양 신청하기</S.Headline>
          <S.InfoInnerContainer>
            <S.DogInfoContainer>
              <img
                src={data.imagesUrl[0]}
                alt="강아지"
                style={{
                  width: "251px",
                  height: "251px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              <S.DogInfoInnerContainer>
                {/* Dog Name */}
                <S.DogNameContainer>{data.name}</S.DogNameContainer>
                {/* Box for information */}
                <S.DogInfoBox>
                  <S.DogInfoBoxItem>견종: {data.type}</S.DogInfoBoxItem>
                  <S.DogInfoBoxItem>성별: {data.gender}</S.DogInfoBoxItem>
                  <S.DogInfoBoxItem>출생일: {data.birthDate}</S.DogInfoBoxItem>
                  <S.DogInfoBoxItem>
                    브리더명: {data.breederNickName}
                  </S.DogInfoBoxItem>
                  {data.isBreederVerified && (
                    <S.DogInfoBoxItem>
                      <BreederBadge width="24" height="24" /> 인증된 브리더
                    </S.DogInfoBoxItem>
                  )}
                </S.DogInfoBox>
              </S.DogInfoInnerContainer>
            </S.DogInfoContainer>
            <S.DogDescContainer>
              <S.DogDescTitleBox>상세설명</S.DogDescTitleBox>
              <S.DogDescBox>{data.management}</S.DogDescBox>
            </S.DogDescContainer>
          </S.InfoInnerContainer>
        </S.InfoContainer>
        <S.AgreementContainer>
          <S.CheckboxContainer onClick={handleAgreementClick}>
            <S.Checkbox isactive={isAgreeChecked}>
              <AiOutlineCheck />
            </S.Checkbox>
            동의합니다
          </S.CheckboxContainer>
          <S.AgreementInfoContainer>{agreementInfo}</S.AgreementInfoContainer>
        </S.AgreementContainer>
        <S.ButtonGroup>
          <S.Button
            color="#4EC1BF"
            disabled={!isAgreeChecked}
            onClick={handleNextButtonClick}
          >
            다음
          </S.Button>
          <S.Button color="#2f2f2f" onClick={handleCancelClick}>
            취소
          </S.Button>
        </S.ButtonGroup>
      </S.InnerContainer>
      <WhiteBox width={1420} height={773} top={284} left={250}></WhiteBox>
    </CustomLayout>
  );
};

export default BreedingRegister;
