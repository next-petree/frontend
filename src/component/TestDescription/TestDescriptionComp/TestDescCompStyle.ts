//스타일 파일
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 8px 0;
  width: 1386px;
  height: 220px;
  box-shadow: 0.5px 1px 7px 0.5px rgba(58, 58, 58, 0.1);
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  content-align: center;
  padding: 20px 44px;
  transition: opacity 0.5s ease-in-out;
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
