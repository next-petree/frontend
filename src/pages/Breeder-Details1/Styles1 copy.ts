import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  /* width: 1920px; */
  width: 100vw;
  /* height: 2040px; */
  overflow-y: scroll;
  background: #ffffff;
`;

export const BannerContainer = styled.div`
  /* Rectangle 24 */
  position: absolute;
  width: 100%;
  height: 383px;
  left: 0px;
  top: 0px;
`;

export const Frame62 = styled.div`
  /* position: absolute; */
  box-sizing: border-box;
  width: 968px;
  height: 793px;
  /* top: 206px;
  left: 436px; */
  gap: 70px;
  /* background-color: aqua; */

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;
`;

export const Frame122 = styled.div`
  width: 968px;
  height: 472px;
  gap: 35px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Frame178 = styled.div`
  width: 230px;
  height: 180px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
`;

export const Frame179 = styled.div`
  width: 968px;
  height: 190px;
  gap: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Frame113 = styled.div`
  width: 504px;
  height: 251px;
  gap: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Frame178_1 = styled.div`
  width: 140px;
  height: 140px;
  color: black;
`;

export const IconContainer = styled.div`
  width: 118.13px;
  height: 118.13px;
  top: 13.13px;
  left: 54px;
`;

export const Name = styled.div`
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 500;
  line-height: 34.75px;
  letter-spacing: 0em;
  text-align: left;
  padding-top: 10px;
`;

export const AddressContainer = styled.div`
  width: 100%;
  height: 25px;
  gap: 16px;

  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`;

export const IntroHeading = styled.div`
  min-width: 140px;
  height: 36px;
  font-family: Noto Sans KR;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  width: 720px;
  height: 48px;
  gap: 16px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  min-width: 170px;
  height: 48px;
  border-radius: 80px;
  border: solid 2px #4ec1bf;
  gap: 10px;
  color: #4ec1bf;
  padding: 11px 30px;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.03em;
`;

export const DescContainer = styled.div`
  width: 726px;
  height: 58px;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.03em;
  text-align: center;

  white-space: pre-wrap;
`;

export const TitleContainer = styled.div`
  font-family: Noto Sans KR;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
`;

export const MainDogContainer = styled.div`
  width: 504px;
  height: 195px;
  gap: 36px;

  display: flex;
`;

export const MainDog = styled.div`
  width: 144px;
  height: 195px;
  gap: 24px;

  display: flex;
  flex-direction: column;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;

export const MainDogName = styled.div`
  width: 144px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Frame63 = styled.div`
  position: absolute;
  box-sizing: border-box;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 44px 69px;

  z-index: 1;
`;

export const FlexBox = styled.div`
  padding: 26px 65px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 36px;
`;

export const Title = styled.div`
  font-family: Noto Sans KR;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;

  padding: 0 69px;
`;

export const CustomImage = styled.img`
  width: 144px;
  height: 144px;
  border-radius: 42px;
  color: #d9d9d9;
  object-fit: cover;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.25);
`;
