import styled from "styled-components";

import firstBackgrondImage from "../../assets/images/Rectangle9.png";
import petTreeLogoImage from "../../assets/images/PetreeIconWhite.png";
import petTreeTextImage from "../../assets/images/PetreeTitleBig.png";

import FirstDogsImage from "../../assets/images/Layer41.png";

import SecondDogsImage from "../../assets/images/Layer31.png";

import LeftDogImage from "../../assets/images/Vector1.png";
import RightDogImage from "../../assets/images/Vector2.png";

import ThirdDogsImage from "../../assets/images/Rectangle7.png";

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
  background: url(${FirstDogsImage}) no-repeat center;
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
  background: url(${SecondDogsImage}) no-repeat center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IntroArea3ContentBox = styled.div`
  min-width: 570px;
  min-height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px 60px 24px 60px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.65);
`;

export const IntroArea3MainTitle = styled.div`
  color: #4a4a4a;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -2px;
`;

export const IntroArea3SubTitle = styled.div`
  color: #4a4a4a;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -2px;
  margin-bottom: 30px;
`;

export const IntroArea3Introduce = styled.div`
  color: #636363;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.2px;
`;

export const IntroArea4 = styled.div`
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const IntroArea4MainTitle = styled.div`
  color: #4ec1bf;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: -2px;
`;

export const IntroArea4SubTitle = styled.div`
  color: #4ec1bf;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: -1.2px;
  margin-bottom: 50px;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LeftImage = styled.div`
  width: 480px;
  height: 340px;
  background: 
  // linear-gradient(
  //     0deg,
  //     rgba(255, 255, 255, 0.1) 0%,
  //     rgba(255, 255, 255, 0.1) 100%
  //   ),
    url(${LeftDogImage}) center / cover no-repeat;
  border-radius: 30px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const LeftHashTag = styled.div`
  width: 15%;
  height: 30px;
  padding: 3px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 2px solid #4ec1bf;
  background: #fff;
  margin-top: 20px;
  margin-left: 20px;
  color: #4ec1bf;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.8px;
`;

export const LeftImageIntroduce = styled.div`
  color: #292929;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.2px;
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RightImage = styled.div`
  width: 480px;
  height: 340px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    url(${RightDogImage}) center / cover no-repeat;
  border-radius: 30px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const RightHashTag = styled.div`
  width: 20%;
  height: 30px;
  padding: 3px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 2px solid #4ec1bf;
  background: #fff;
  margin-top: 20px;
  margin-left: 20px;
  color: #4ec1bf;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.8px;
`;

export const RightImageIntroduce = styled.div`
  color: #292929;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.2px;
`;

export const IntroArea5 = styled.div`
  height: 717px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${ThirdDogsImage}) no-repeat center;
`;

export const IntroArea5MainTitle = styled.div`
  color: #fff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: -2px;
  margin-bottom: 20px;
`;

export const IntroArea5SubTitle = styled.div`
  color: #fff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -1.2px;
  margin-bottom: 30px;
`;

export const IntroArea5HashTagArea = styled.div`
  display: flex;
  gap: 15px;
`;

const HashTag = styled.div`
  color: #fff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -1px;
  border-radius: 50px;
  border: 2px solid #fff;
  background: rgba(255, 255, 255, 0);
`;

export const HashTag1 = styled(HashTag)`
  width: 100px;
`;

export const HashTag2 = styled(HashTag)`
  width: 100px;
`;

export const HashTag3 = styled(HashTag)`
  width: 120px;
`;

export const HashTag4 = styled(HashTag)`
  width: 100px;
`;

export const HashTag5 = styled(HashTag)`
  width: 80px;
`;
