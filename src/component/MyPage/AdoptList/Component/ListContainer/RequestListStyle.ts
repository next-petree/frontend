import styled from 'styled-components';

export const TitleWrap = styled.div``;
export const Title = styled.h3`
  font-size: 20px;
  margin: 0;
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
