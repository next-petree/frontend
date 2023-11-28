import styled from "styled-components";

import CheckedImage from "../../../assets/images/checkbox-image.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin-top: 220px;
  background: none;
  gap: 1.5vw;
  margin-bottom: 20vh;
`;

export const Content = styled.div`
  width: 49vw;
  height: fit-content;
  padding: 5.75vw 3vw 5.75vw;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  z-index: 1;
  background-color: #fff;
`;

export const TitleArea = styled.div`
  width: 100%;
  height: 200px;
`;

export const Title = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  margin-bottom: 100px;
`;

export const SubTitle = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.6px;
`;

export const InfomationArea = styled.div`
  position: relative;
  width: 90%;
  height: 300px;
  padding: 50px 5%;
  background-color: #f5f5f5;
  border-radius: 20px;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 200%;
  letter-spacing: -0.48px;
  overflow-y: auto;
  img {
    position: absolute;
    right: 30px;
    top: 20px;
  }
`;

export const CheckInputArea = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 180px;
`;

export const CheckInput = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #999;
  border-radius: 5px;
  margin-right: 12px;

  &:checked {
    background-image: url(${CheckedImage});
    border: none;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

export const CheckInputText = styled.div`
  color: #000;
  text-align: right;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  width: 240px;
  height: 52px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const RemoveAccountButton = styled(Button)`
  background-color: #4ec1bf;
`;
