//스타일 파일
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const TestDescCompWrapper = styled.div`
  animation: ${fadeIn} 0.5s forwards;
`;
export const Wrapper = styled.div`
  margin: 12px 0;
  width: 80vw;
  height: 220px;
  box-shadow: 0.5px 1px 7px 0.5px rgba(58, 58, 58, 0.1);
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  content-align: center;
  padding: 20px 44px;
`;

export const ImgWrap = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 12px;
`;
export const TitleWrap = styled.div`
  width: 80%;
  padding: 6px 4px;
`;
export const Title = styled.h4`
  font-size: 32px;
  margin: 0;
  padding: 3px 0;
`;
export const Text = styled.p`
  font-size: 24px;
  padding: 3px 0;
  margin: 0;
`;
