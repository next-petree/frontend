import styled, { css } from "styled-components";

export const InnerWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhiteBox = styled.div`
  box-sizing: border-box;
  /* width: 74vw; */
  background: #ffffff;
  /* shadow */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 1280px;

  @media (min-width: 1024px) and (max-width: 1240px) {
    width: 1020px;
  }

  @media (min-width: 768px ) and (max-width: 1023px) {
    width: 90%;
  }

  @media (max-width: 767px) {
    width: 90%;
    gap: 40px;
  }

`

export const InnerContainer = styled.div`
  /* Auto layout */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 57px;

  background-color: red;
`;

export const InfoContainer = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 57px;

  width: 100%;

  background-color: aqua;
`;

export const Headline = styled.div<{ textsize: number }>`
  width: 161px;
  height: 36px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => props.textsize}px;
  line-height: 36px;

  color: #000000;
`;

export const InfoInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 44px;
  width: 100%;
  /* height: 251px; */

  @media (min-width: 768px ) and (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }

  background-color: green;
`;

export const DogInfoContainer = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 80px;

  width: 674px;
  height: 251px;

  background-color: blue;
`;



export const DogInfoInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;

  /* width: 343px; */
  /* height: 251px; */

  background-color: pink;
`;

export const DogNameContainer = styled.div`
  width: 165px;
  height: 40px;
  gap: 12px;
  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
`;

export const DogInfoBox = styled.div`
  width: 343px;
  padding: 20px 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  border-top: 1px solid #aeaeae;
  border-bottom: 1px solid #aeaeae;

  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
`;

export const DogInfoBoxItem = styled.div`
  width: 235px;
  display: flex;
  gap: 9px;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;

  background-color: orange;
`;

export const DogDescContainer = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  background-color: yellow;

  width: 100%;
`;

export const DogDescTitleBox = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #000000;
`;

export const DogDescBox = styled.div`
  width: 85%;
  border-radius: 16px;
  padding: 15px 20px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #333333;
  background: #f5f5f5;
  white-space: pre-wrap;
`;

export const AgreementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  /* width: 722px; */
  /* height: 91px; */

  background-color: purple;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const CheckboxContainer = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #000000;
  display: flex;
  gap: 16px;

  
`;

export const Checkbox = styled.div<{ isactive: boolean }>`
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #cccccc;
  ${(props) =>
    props.isactive &&
    css`
      background: #4ec1bf;
      border: none;
      color: #ffffff;
    `}
`;

export const AgreementInfoContainer = styled.div`
  width: 90%;
  /* height: 46px; */
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 350;
  line-height: 23px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #000000;
  white-space: pre-wrap;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button<{ color: string }>`
  width: 240px;
  height: 52px;
  /* padding: 29px 100px; */
  border-radius: 16px;
  gap: 10px;
  border: none;

  background: #2f2f2f;
  &:disabled {
    background: #b7b7b7;
  }

  background: ${(props) => props.color};

  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 120px;
  }
`;
