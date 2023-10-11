import { styled } from "styled-components";

export const TeamMission = styled.section`
  position: relative;
  width: 100%;
  height: 793px;
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
    height: 793px;
  }
`;
export const Message = styled.div`
  z-index: 2;
  position: relative;
  display: inline-flex;
  height: 334px;
  padding: 24px 60px;
  margin-top: 237px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  flex-shrink: 0;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.65);
  h2 {
    color: #4a4a4a;
    text-align: center;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px; /* 125% */
    letter-spacing: -2px;
  }
  p {
    color: #636363;
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
