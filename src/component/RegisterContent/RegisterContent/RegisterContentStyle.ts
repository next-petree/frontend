import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 80vh;
  margin: 80px auto 150px auto;
  flex-direction: column;
  align-items: start;
`;

export const RegisterSequence = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 80px;
`;

export const RegisterSequenceStyle = styled.img`
  width: 250px;
`;

export const InnerContent = styled.div`
  display: flex;
  height: 621px;
  flex-direction: column;
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
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

export const AgreeAllArea = styled.div`
  margin-bottom: 40px;
`;

export const AgreeAllContent = styled(content)``;

export const AgreeAllCheckInput = styled.input.attrs({ type: "checkbox" })`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
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
`;

export const TermsContent = styled(content)``;

export const TermsCheckInput = styled(checkbox)``;

export const TermsTitle = styled(title)``;

export const DropDown = styled.div`
  display: flex;
  justify-content: space-between;
  width: 823px;
  padding: 0 15px 0 15px;
  height: 58px;
  background-color: #f5f5f5;
  align-items: center;
  border-radius: 15px;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
  cursor: pointer;
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
  margin: 0 auto;
  margin-top: 100px;
`;

export const NextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  padding: 17px 20px;
  border: none;
  border-radius: 16px;
  background-color: #35d8d5;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
