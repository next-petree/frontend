import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WhiteBox1 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 1200px;
  height: 793px;
  top: 14%; 
  background: #ffffff;
  /* background-color: aqua; */
  /* shadow */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 0;
`;

export const WhiteBox2 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 1200px;
  top: 56%; 
  background: #ffffff;
  /* shadow */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 40px 0;
`;

export const IconContainer = styled.div`
  position: absolute;
  width: 118.13px;
  height: 118.13px;
  top: 10%;
  /* left: 54px; */
  z-index: 2;
  margin-right: 20px;
`;

export const Name = styled.div`
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 500;
  line-height: 34.75px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 10px;
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

export const IntroContainer = styled.div`
  width: 100%;
  height: 25px;
  gap: 15px;

  margin: 100px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
`;

export const Title = styled.p`
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 500;
  line-height: 34.75px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const DescContainer = styled.div`
  padding: 20px 0;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.03em;
  text-align: center;

  white-space: pre-wrap;
`;

export const MainDogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 36px;
  padding: 20px 0;
`;

export const MainDogImgContainer = styled.div`
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

export const CustomImage = styled.img`
  width: 144px;
  height: 144px;
  border-radius: 42px;
  color: #d9d9d9;
  object-fit: cover;
`;

export const OwnDogImgFlexBox = styled.div`
  padding: 26px 65px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 36px;
`;

export const OwnDogTitle = styled(Title)`
  margin-left: 80px;
`

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.25);
`;