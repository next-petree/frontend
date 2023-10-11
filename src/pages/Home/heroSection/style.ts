import { styled } from "styled-components";

import { COLOR } from "@assets/constant/style";

export const Start = styled.section`
  width: 100%;
  height: 717px;
  background: linear-gradient(324deg, #3cbe9f 8.33%, #8ff9b9 100%);
  position: relative;
  overflow: hidden;
  .background {
    img {
      z-index: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1920px;
      height: 717px;
    }
    & + div {
      z-index: 2;
      position: relative;
    }
  }
  h2 {
    margin-top: 229px;
    color: ${COLOR.white};
    text-align: center;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 54px; /* 135% */
    letter-spacing: -2px;
  }
  .sub-title {
    margin: 28px 0;
    color: ${COLOR.white};
    text-align: center;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px; /* 150% */
    letter-spacing: -1.2px;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 16px;
  .tag {
    border: 2px solid ${COLOR.primary};
    color: ${COLOR.white};
    display: flex;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 50px;
    border: 2px solid ${COLOR.white};
    background: rgba(255, 255, 255, 0);
    color: ${COLOR.white};
    text-align: center;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 42px; /* 210% */
    letter-spacing: -1px;
  }
  margin-bottom: 17.37rem;
`;

export const Hero = styled.section`
  width: 100%;
  height: 980px;
  background-color: #ddd;
  position: relative;
  overflow: hidden;
  .background img {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1920px;
    height: 980px;
  }
`;

export const HeroSloganWrapper = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 980px;
  padding-top: 354px;
  #logo-paw {
    width: 127px;
    height: 127px;
    margin-bottom: 12px;
  }
  #logo-text {
    width: 197.407px;
    height: 64.841px;
    margin-bottom: 77px;
  }
  #hero-slogan {
    color: ${COLOR.white};
    text-align: center;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.9px;
    margin: 0 0 150px;
  }
  #bottom-arrow {
    display: inline-flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
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
