import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  width: 1060px;
  height: fit-content;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  padding: 4vw 3vw 2.5vw;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Title = styled.div`
  width: 100%;
  font-family: Noto Sans KR;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const SearchBoxContainer = styled.div`
  width: 420px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Input = styled.input`
  width: 280px;
  height: 48px;
  background: #f5f5f5;
  padding: 0 15px;
  border: none;
  border-radius: 16px;

  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #939393;
`;

export const ReviewContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 18px;

  margin-top: 30px;
`;

export const ReviewItem = styled.div`
  width: 893px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;

export const ReviewDogImage = styled.img`
  width: 198px;
  height: 118px;
  border-radius: 9.9px;
`;

export const ReviewDescContainer = styled.div`
  width: 273px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ReviewDesc = styled.div`
  width: 235px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ReviewDescItem = styled.div`
  width: 100%;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
`;

export const ReviewTitle = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
`;

export const PaginationContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 40px 0 20px 0;
`;
