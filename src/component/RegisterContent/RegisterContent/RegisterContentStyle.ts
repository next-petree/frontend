import styled from "styled-components";

import CheckedImage from "../../../assets/images/checkbox-image.png";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 80px auto 150px auto;
  flex-direction: column;
  align-items: center;
`;

export const RegisterSequence = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 80px;
`;

export const RegisterSequenceStyle = styled.img`
  width: 280px;
`;

export const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 390px) {
  }
`;

export const TitleArea = styled.div`
  margin-bottom: 62px;
`;

export const Title = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
`;

const content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const title = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
`;

const checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #999;
  border-radius: 5px;
  margin-right: 12px;

  &:checked {
    background-image: url(${CheckedImage});
    border: none;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

export const AgreeAllArea = styled.div`
  margin-bottom: 40px;
`;

export const AgreeAllContent = styled(content)``;

export const AgreeAllCheckInput = styled(checkbox)`
  width: 28px;
  height: 28px;
`;

export const AgreeAllTitle = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.6px;
`;

export const AgreeAllText = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const TermsArea = styled.div`
  margin-bottom: 45px;
  height: 50%;
`;

export const TermsContent = styled(content)``;

export const TermsCheckInput = styled(checkbox)``;

export const TermsTitle = styled(title)``;

export const DropDown = styled.div`
  position: relative;
  justify-content: space-between;
  width: 823px;
  padding: 15px 20px;
  background-color: #f5f5f5;
  align-items: center;
  border-radius: 15px;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 200%;
  letter-spacing: -0.48px;
  cursor: pointer;

  img {
    position: absolute;
    right: 30px;
    top: 15px;
  }

  @media (max-width: 768px) {
    max-width: 94%;
  }
  @media (max-width: 390px) {
    width: 88.5%;
  }
`;

export const PersonalInfomationArea = styled.div`
  margin-bottom: 45px;
`;

export const PersonalInfomationContent = styled(content)``;

export const PersonalInfomationCheckInput = styled(checkbox)``;

export const PersonalInfomationTitle = styled(title)``;

export const LocationBasedServiceArea = styled.div``;

export const LocationBasedServiceContent = styled(content)``;

export const LocationBasedServiceCheckInput = styled(checkbox)``;

export const LocationBasedServiceTitle = styled(title)``;

export const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 390px) {
    width: 80%;
  }
`;

export const NextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  padding: 13px 25px;
  border: none;
  border-radius: 16px;
  background-color: #4ec1bf;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
