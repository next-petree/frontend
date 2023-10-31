import styled from 'styled-components';

export const TestTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  border-radius: 32px;
  margin: 0;
  padding: 12.75px 114.65px;
  box-shadow: 0.5px 1px 3px 0.5px rgba(58, 58, 58, 0.4);
`;
export const TestWrap = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TestNumber = styled.div`
  font-size: 21px;
  span {
    font-weight: 500;
  }
`;
export const Question = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
`;
export const ExampleWrap = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  gap: 20px;
  button:hover {
    border: 1px solid #39e57e;
    background: #dcfadb;
  }
  button:focus {
    border: 1px solid #39e57e;
    background: #dcfadb;
  }
`;
export const Example = styled.button`
  color: blue;
  width: 90%;
  height: 60px;
  font-size: 18px;
  font-weight: 400;
  color: #000;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
`;
