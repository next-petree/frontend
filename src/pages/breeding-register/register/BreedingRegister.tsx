import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";

import CustomLayout from "../../Layout/CustomLayout";
import WhiteBox from "../../../component/WhiteBox/WhiteBox";

import { IMG2 } from "../../../assets/images";
import { dogdetailInfo, agreementInfo } from "../../../constants";
import * as S from "./styles";

const BreedingRegister = () => {
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);

  const navigate = useNavigate();

  const handleAgreementClick = () => {
    setIsAgreeChecked((prev) => !prev);
  };

  const handleNextButtonClick = () => {
    navigate("/register-fillout");
  };

  return (
    <CustomLayout height={1185}>
      <S.InnerContainer>
        <S.InfoContainer>
          <S.Headline textsize={28}>분양 신청하기</S.Headline>
          <S.InfoInnerContainer>
            <S.DogInfoContainer>
              <img
                src={IMG2}
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
                <S.DogNameContainer>루카스</S.DogNameContainer>
                {/* Box for information */}
                <S.DogInfoBox>
                  <S.DogInfoBoxItem>견종: 포메라니안</S.DogInfoBoxItem>
                  <S.DogInfoBoxItem>성별: 수컷</S.DogInfoBoxItem>
                  <S.DogInfoBoxItem>출생일: 2023.05.23</S.DogInfoBoxItem>
                  <S.DogInfoBoxItem>브리더명: 수현</S.DogInfoBoxItem>
                </S.DogInfoBox>
              </S.DogInfoInnerContainer>
            </S.DogInfoContainer>
            <S.DogDescContainer>
              <S.DogDescTitleBox>상세설명</S.DogDescTitleBox>
              <S.DogDescBox>{dogdetailInfo}</S.DogDescBox>
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
          <S.Button color="#2f2f2f">취소</S.Button>
        </S.ButtonGroup>
      </S.InnerContainer>
      <WhiteBox width={1420} height={773} top={284} left={250}></WhiteBox>
    </CustomLayout>
  );
};

export default BreedingRegister;
