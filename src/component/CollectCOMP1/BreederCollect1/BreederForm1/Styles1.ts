import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  justify-content: center;
  align-items: center;
  gap: 1.7rem;
  height: 5.2rem;
  margin: 0 auto;
  margin-bottom: -2vh;
`;

export const ToggleContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    margin-top: 8rem;
    
  }
`

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
  gap: 1.5rem;
  @media (max-width: 1120px) {
    gap: 0.5rem;
    width: 70%;
  } ;
  @media (max-width: 450px){
    gap: 0.2rem;
    width: 90%;
  }
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 52px;
  border: none;
  border-radius: 12px;
  background-color: #35d8d5;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  color: white;
`;