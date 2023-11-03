import styled from "styled-components";

export const Wrapper = styled.div`
  /* width: 1920px; */
  width: 100vw;
  height: 1080px;
  background: #ffffff;
  position: relative;
`;

export const TopContainer = styled.div`
  position: absolute;
  top: 279px;
  left: 780px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const TopContainerText = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #000000;
  white-space: pre-wrap;
`;

export const BottomContainer = styled.div`
  width: 349px;
  height: 58px;
  position: absolute;
  top: 653px;
  left: 785px;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #000000;

  white-space: pre-wrap;
`;

export const BoldText = styled.span`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #000000;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 761px;
  left: 841px;
`;

export const Button = styled.button`
  width: 240px;
  height: 52px;
  padding: 29px, 327px;
  border-radius: 16px;
  background: #4ec1bf;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  /* text-align: left; */
  color: #ffffff;
  border: none;
  cursor: pointer;
`;
