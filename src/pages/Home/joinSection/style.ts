import { styled } from "styled-components";
import { COLOR } from "@assets/constant/style";
export const Join = styled.section`
  width: 100%;
  h2 {
    color: ${COLOR.primary};
    text-align: center;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 54px; /* 135% */
    letter-spacing: -2px;
    margin: 184px 0 10px;
    & + p {
      color: ${COLOR.primary};
      text-align: center;
      font-family: "Noto Sans KR", sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 42px; /* 175% */
      letter-spacing: -1.2px;
    }
  }
`;

export const ThumbnailCardWrapper = styled.div`
  margin: 60px 0 322px;
  display: flex;
  gap: 20px;
`;

export const ThumbnailCard = styled.div`
  .thumbnailWrapper {
    width: 480px;
    height: 340px;
    position: relative;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.09);
    border-radius: 18px;
    overflow: hidden;
    .tag {
      position: absolute;
      top: 20px;
      left: 20px;
      display: inline-flex;
      padding: 3px 20px;
      justify-content: center;
      align-items: center;
      gap: 6px;
      border-radius: 50px;
      border: 2px solid ${COLOR.primary};
      background: ${COLOR.white};
      color: ${COLOR.primary};
      text-align: center;
      font-family: "Noto Sans KR", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 36px; /* 225% */
      letter-spacing: -0.8px;
    }
    img {
      width: 480px;
      height: 340px;
    }
  }
  p {
    margin-top: 20px;
    color: #292929;
    text-align: center;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1.2px;
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
