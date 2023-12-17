import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  height: 52px;
  margin: 0 auto;
  margin-bottom: -2vh;
`;

export const State = styled.span`
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 2rem;
  color: #4ec1bf;
`;
export const Form = styled.form`
  display: flex;
  gap: 17px;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 52px;
  border: none;
  border-radius: 12px;
  background-color: #35d8d5;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  color: white;
`;