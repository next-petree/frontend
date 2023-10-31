//스타일 파일
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
`;
export const TestHeader = styled.div`
  margin: 0;
  height: 60px;
  background: lightblue;
`;
export const TitleWrapper = styled.div`
  margin: 0;
  text-align: center;
`;
export const FirstTitle = styled.h4`
  margin: 0;
  font-size: 40px;
  font-weight: 350;
`;
export const SecondTitle = styled.h3`
  margin: 0;
  font-size: 60px;
  font-weight: 500;
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
  padding: 40px 0 60px;
`;
export const StartTestBtn = styled.button`
  background-color: #35d8d5;
  border: none;
  width: 480px;
  height: 52px;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  border-radius: 16px;
  cursor: pointer;
`;