import styled from "styled-components";
export const Td = styled.td`
  width: 16%;
`;
export const DetailButton = styled.button`
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  background: #4ec1bf;
  border: none;
  border-radius: 10px;
  padding: 12px 15px;
  cursor: pointer;
`;
export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow-y: auto;
`;
export const Modal = styled.div`
  top: 0;
  bottom: 10vh;
  padding: 20px 20px 50px;
  width: 80%;
  background: #fff;
  border-radius: 32px;
  position: relative;
  overflow: auto;
  z-index: 10000;
`;

export const Title = styled.h3`
  color: #4ec1bf;
  font-size: 23px;
  font-weight: 800;
  margin: 20px 0 30px;
`;
export const InfoWrap = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: center;
  text-align: left;
  align-items: center;
  gap: 3%;
  padding: 20px 0;
`;
export const Img = styled.img`
  width: 130px;
  object-fit: cover;
`;
export const DetailInfoWrap = styled.div`
  width: 50%;
  color: #333333;
  font-size: 13px;
  font-weight: 500;
  div {
    line-height: 25px;
  }
`;
export const DogName = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
export const BreedDog = styled.div``;
export const Gender = styled.div``;
export const BDay = styled.div``;

export const AnswerWrap = styled.div`
  text-align: left;
  width: 70%;
  margin: 0 auto;
  color: #000;
`;
export const Question = styled.h4`
  font-size: 16px;
  font-weight: 500;
`;
export const AnswerTextBox = styled.div`
  background: #fafafa;
  width: 100%;
  max-height: 25vh;
  box-sizing: border-box;
  border-radius: 5px;
  color: #939393;
  padding: 10px 20px;
  border: none;
  resize: none;
  overflow: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  position: relative;
`;
export const CountSpan = styled.span`
  position: absolute;
  bottom: 1vh;
  right: 2vw;
  float: right;
  color: #939393;
`;
