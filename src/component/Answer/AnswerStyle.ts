import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding-bottom: 120px;
  text-align: center;
  button:hover {
    background: #35d8d5;
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 64px;
  background: lightblue;
`;
export const AnswerTitle = styled.h3`
  font-size: 40px;
  color: #4ec1bf;
`;
export const SubTitle = styled.h4`
  font-size: 40px;
`;

export const AnswerWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  display: grid;
  grid-template-rows: repeat(6, min-content);
  grid-auto-flow: column;
  row-gap: 0;
  column-gap: 120px;
  margin-bottom: 50px;
`;

export const Btn = styled.button`
  background: #4ec1bf;
  border: none;
  border-radius: 16px;
  width: 480px;
  height: 52px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;
