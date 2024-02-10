import styled from "styled-components";

export const TestTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  border-radius: 32px;
  margin: 0;
  padding: 12.75px 114.65px;
  box-shadow: 0.5px 1px 3px 0.5px rgba(58, 58, 58, 0.4);
`;
export const TestWrap = styled.div`
  width: 80%;
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
  height: auto;
  display: grid;
  grid-template-columns: 1fr; // 모든 열이 동일한 너비를 가지도록 설정
  grid-auto-rows: minmax(
    60px,
    auto
  ); // 모든 행이 동일한 최소 높이를 가지도록 설정
  place-items: center;
`;

export const ExampleLabel = styled.label`
  color: blue;
  width: 90%;
  height: auto; // 높이를 auto로 설정하여 필요한 만큼의 공간만 차지하도록 설정
  padding: 10px; // 패딩 추가
  margin: 10px 0; // 위아래 마진 추가
  font-size: 18px;
  font-weight: 400;
  color: #000;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; // 아이템들을 세로로 배열
  text-align: center; // 텍스트를 중앙에 위치
`;

export const Example = styled.input`
  display: none;

  &:checked + ${ExampleLabel} {
    border: 1px solid #39e57e;
    background: #dcfadb;
  }
`;
