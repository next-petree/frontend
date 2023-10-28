import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 100px 0;
`;
export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px;
  border-radius: 32px;
  width: 74vw; //
  height: fit-content;
  padding: 5% 3%; //
  min-width: 1075px;
  min-height: 725px;
  box-shadow: 0px 4px 6px 0px #00000017;
`;
export const Title = styled.h1`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  font-size: 4.5rem;
  color: #4ec1bf;
`;
export const BoxContainer = styled.div`
  margin-top: 79px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  column-gap: 20px; //
  row-gap: 40px; //
  justify-items: center;
  align-items: center;
  width: 100%; //
  height: fit-content; //
`;