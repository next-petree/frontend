import styled, { css } from "styled-components";

export const InnerContainer = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 57px;

  position: absolute;
  width: 1248px;
  height: 601px;
  left: 336px;
  top: 370px;

  z-index: 999;
`;

export const InfoContainer = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 57px;

  width: 1248px;
  height: 344px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
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

  width: 1248px;
  height: 251px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
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

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const DogDescContainer = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  width: 520px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const DogInfoInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;

  width: 343px;
  height: 251px;
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
`;

export const DogDescTitleBox = styled.div`
  width: Fixed 429px;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #000000;
`;

export const DogDescBox = styled.div`
  width: 520px;
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
  width: 722px;
  height: 91px;
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
  width: 722px;
  height: 46px;
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
`;
