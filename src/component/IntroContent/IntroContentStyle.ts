import styled from "styled-components";

import firstBackgrondImage from "../../assets/images/Rectangle9.png";
import petTreeLogoImage from "../../assets/images/PetreeIconWhite.png";
import petTreeTextImage from "../../assets/images/PetreeTitleBig.png";

import FirstDogImage from "../../assets/images/Layer41.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IntroArea1 = styled.div`
  height: 850px;
  width: 100%;
  background: url(${firstBackgrondImage}) no-repeat center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleLogo = styled.div`
  width: 300px;
  height: 127px;
  background: url(${petTreeLogoImage}) no-repeat center;
`;

export const TitleTextLogo = styled.div`
  width: 197.407px;
  height: 64.841px;
  background: url(${petTreeTextImage}) no-repeat center;
`;

export const IntroArea2 = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

export const IntroArea2DogImage = styled.div`
  width: 480px;
  height: 440px;
  background: url(${FirstDogImage}) no-repeat center;
`;

export const IntroArea2TextArea = styled.div`
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IntroArea2MainTitle = styled.div`
  color: #4ec1bf;
  font-family: Noto Sans KR;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -2px;
  margin-bottom: 20px;
`;

export const IntroArea2SubTitle1 = styled.div`
  color: #3dbcb9;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.2px;
  margin-bottom: 50px;
`;

export const IntroArea2SubTitle2 = styled.div`
  color: #333;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.2px;
  margin-bottom: 30px;
`;

export const IntroArea2Introduce = styled.div`
  color: #333;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`;

export const IntroArea3 = styled.div`
  height: 793px;
  background: url(${FirstDogImage}) no-repeat center;
`;

export const IntroArea3ContentBox = styled.div``;

export const IntroArea3MainTitle = styled.div``;

export const IntroArea3SubTitle = styled.div``;

export const IntroArea3Introduce = styled.div``;
