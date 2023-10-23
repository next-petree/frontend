//스타일 파일
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 8px 0;
  width: 90%;
  // border: 1px solid rgba(58, 58, 58, 0.8);
  box-shadow: 0.5px 1px 3px 0.5px rgba(58, 58, 58, 0.4);
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  content-align: center;
  padding: 5px;
`;
export const ImgWrap = styled.img`
  width: 12%;

  border-radius: 12px;
`;
export const TitleWrap = styled.div`
  width: 85%;
  padding: 6px 4px;
`;
export const Title = styled.h4`
  font-size: 18px;
  margin: 0;
  padding: 3px 0;
`;
export const Text = styled.p`
  font-size: 12px;

  padding: 3px 0;
  margin: 0;
`;
