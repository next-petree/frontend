import { styled } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  opacity: 1;
`;

export const FilterContainer = styled.div`
  position: absolute;
  width: 50vw;
  height: 82vh;
  border-radius: 50px;
  top: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 99999;
  background-color: white;
  padding: 3vw 6vw;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 2vw;
`;
export const Title = styled.h1`
  font-size: 3.5rem;
  display: flex;
  align-items: center;
`;

export const Checks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1vw;
`;
export const Check = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
`;
export const Buttons = styled.div`
  display: flex;
  gap: 0.8vw;
`;
export const Btn = styled.div<{ $isCheck: boolean | undefined; $isLong: boolean }>`
  width: ${(props) => (props.$isLong ? "17vw" : "7.5vw")};
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.$isCheck ? "none" : "1px solid #4EC1BF")};
  border-radius: 12px;
  background-color: ${(props) => (props.$isCheck ? "#4EC1BF" : "white")};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: ${(props) => (props.$isCheck ? "white" : " #4EC1BF")};
`;

export const Span = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const Confirms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8vw;
  margin-top: 1vw;
`;

export const ConfirmBtn = styled.button<{ $isYes: boolean }>`
  width: 17vw;
  height: 7vh;
  border: none;
  border-radius: 12px;
  background-color: ${(props) => (props.$isYes ? "#4EC1BF" : "black")};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: white;
`;
