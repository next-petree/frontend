import { styled } from "styled-components";
import { COLOR } from "@assets/constant/style";
export const Service = styled.section`
  width: 100%;
  .container {
    width: 1240px;
    display: flex;
    gap: 90px;
    margin: 222px 320px 184px;
    .left-image img {
      width: 480px;
      height: 440px;
    }
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: ${COLOR.primary};
    font-family: "Noto Sans KR", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 135%;
    letter-spacing: -2px;
    margin-bottom: 24px;
    & + .sub-title {
      color: #3dbcb9;
      font-family: "Noto Sans KR", sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -1.2px;
    }
  }
`;

export const BreederWrapper = styled.div`
  h2 {
    color: #333;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1.2px;
    margin: 45px 0 13px;
    & + p {
      color: #333;
      font-family: "Noto Sans KR", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -1px;
      word-break: keep-all;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
  overflow-x: hidden;
  display: flex;
`;

export const InnerContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
