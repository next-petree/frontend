import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1920px;
  height: 1080px;
  background: #ffffff;
  position: relative;
`;

export const CustomImage = styled.img`
  width: 288px;
  height: 264px;
  object-fit: cover;
  border-radius: 20px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const TextBox = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #000000;
  white-space: pre-wrap;
`;

export const CustomSpan = styled.span`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #000000;
`;

export const Button = styled.button`
  width: 240px;
  height: 52px;
  padding: 29px, 327px;
  margin-top: 10px;
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
