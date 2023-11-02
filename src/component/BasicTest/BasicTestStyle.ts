import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const TestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrap = styled.div`
  height: 278px;
  width: 100%;
  background: #4ec1bf;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TestModalWrap = styled.div`
  width: 600px;
  height: 70vh;
  border-radius: 40px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: 0.5px 1px 5px 0.5px rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 23%;
`;
export const TestTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  border-radius: 32px;
  margin: 0;
  padding: 12.75px 114.65px;
  box-shadow: 0.5px 1px 4px 0.5px rgba(58, 58, 58, 0.1);
`;
export const MoveBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 52px;
  width: 75%;
  button {
    width: 48%;
    border-radius: 16px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
  }
  :nth-child(2):hover {
    background: #35d8d5;
  }
`;
export const PreBtn = styled.button`
  background: #b7b7b7;
`;
export const NextBtn = styled.button`
  background: #4ec1bf;
`;
export const BGImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -100;
`;
