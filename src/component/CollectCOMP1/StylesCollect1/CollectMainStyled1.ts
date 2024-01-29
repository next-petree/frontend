import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 2vh 0;
`;
export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px;
  border-radius: 32px;
  width: 74vw; //
  height: fit-content;
  padding: 4% 3% 5% 3%; //
  box-shadow: 0px 4px 6px 0px #00000017;
  @media (max-width: 500px) {
    box-shadow: none;
  }
`;
export const Title = styled.h1`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  font-size: 4.5rem;
  color: #4ec1bf;
`;
export const BoxContainer = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  column-gap: 20px; //
  row-gap: 40px; //
  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    column-gap: 1vw;
  } ;
  justify-items: center;
  align-items: center;
  width: 100%; //
  height: fit-content; //
`;

export const No_return = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 79px;
  width: 100%;
  height: 70vh;
  div {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 700;
    font-size: 4.5rem;
    color: #4ec1bf;
  }
`;

export const SearchBtn = styled.button`
  align-self: flex-end;
  @media (max-width: 768px) {
    align-self: center;
    margin-top: 2rem;
  }
  margin-right: 2%;
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
  font-size: 2rem;
  color: white;
  margin-top: -1vh;
  margin-bottom: -6vh;
`;

export const BoxWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
