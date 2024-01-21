import styled, { css } from "styled-components";

export const BoxsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin-top: 220px;
  background: none;
  gap: 1.5vw;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SubmitButton = styled.button<{ isSubmit?: boolean }>`
  width: 240px;
  height: 52px;
  border-radius: 16px;
  border: none;
  background: #4ec1bf;

  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;

  margin-left: 13%;
  margin-top: 30px;
  cursor: pointer;
`;

export const CancleButton = styled.button`
  width: 240px;
  height: 52px;
  border-radius: 16px;
  border: none;
  background: #4ec1bf;

  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;

  margin-left: 13%;
  cursor: pointer;
`;
