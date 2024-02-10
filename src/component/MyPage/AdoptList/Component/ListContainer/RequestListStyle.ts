import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 50vw;
  height: fit-content;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  padding: 4vw 3vw 2.5vw;
  z-index: 100;
  @media (max-width: 1100px) {
    width: 80vw;
  }
  @media (max-width: 700px) {
    width: 95vw;
  }
`;

export const TitleWrap = styled.div``;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 3rem;
`;
export const SubTitle = styled.p`
  color: #7a7a7a;
  font-size: 13px;
  span {
    font-weight: 700;
  }
`;

export const PageNationWrap = styled.div`
  text-align: center;
  margin: 20px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    align-items: center;
    button {
      cursor: pointer;
      background: #fff;
      width: 25px;
      height: 25px;
      border: 1px solid #dfe3e8;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 700;
    }
  }
`;
