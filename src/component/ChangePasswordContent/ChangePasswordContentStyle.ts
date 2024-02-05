import styled from "styled-components";
import { Link } from "react-router-dom";

import characterImage from "../../assets/icons/Group.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 200px auto 0 auto;
`;

export const CharacterImage = styled.div`
  width: 101px;
  height: 148.344px;
  background-image: url(${characterImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ChangePasswordTitle = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.96px;
  margin: 40px 0 40px 0;
`;

export const PasswordInputArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 150px 0 0;
  @media (max-width: 768px) {
    margin: 0;
  }
  @media (max-width: 390px) {
  }
`;

export const NewPasswordArea = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckPasswordArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Text = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.6px;
  width: 120px;
  margin-right: 25px;
`;

export const NewPasswordText = styled(Text)``;

export const CheckPasswordText = styled(Text)``;

const Input = styled.input`
  width: 240px;
  height: 25px;
  padding: 10px;
  font-size: 16px;
  background-color: #f5f5f5;
  border: 0px;
  border-radius: 10px;
  @media (max-width: 768px) {
  }
  @media (max-width: 390px) {
    width: 60%;
  }
`;

export const NewPasswordInput = styled(Input)``;

export const CheckPasswordInput = styled(Input)``;

export const CheckButton = styled(Link)`
  display: flex;
  width: 240px;
  height: 25px;
  margin-right: 10px;
  padding: 10px;
  border: none;
  border-radius: 12px;
  background: #4ec1bf;
  color: #fff;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
