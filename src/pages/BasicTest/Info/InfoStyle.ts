//스타일 파일
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  border: 1px solid black;
`;
export const TestHeader = styled.div`
  margin: 0;
  height: 60px;
  background: lightblue;
`;
export const TitleWrapper = styled.div`
  margin: 0;
  border: 1px solid red;
  text-align: center;
`;
export const FirstTitle = styled.h4`
  margin: 0;
  border: 1px solid orange;
  font-size: 20px;
`;
export const SecondTitle = styled.h3`
  margin: 0;
  border: 1px solid yellow;
  font-size: 30px;
`;
export const TestInfoWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
export const StartTestBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const StartTestBtn = styled.button`
  background-color: #4ec1bf;
  border: none;
  padding: 12px 120px;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  border-radius: 12px;
  cursor: pointer;
`;
