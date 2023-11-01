import styled from "styled-components";
import { Link } from "react-router-dom";

import characterImage from "../../assets/icons/Group.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 300px auto 0 auto;
`;

export const CharacterImage = styled.div`
  width: 101px;
  height: 148.344px;
  background-image: url(${characterImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ResultTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 40px 0 40px 0;
`;

export const ResultFormArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const ResultText = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.6px;
  width: 60px;
  margin-right: 25px;
`;

export const ResultForm = styled.input`
  width: 240px;
  height: 25px;
  padding: 10px;
  font-size: 16px;
  background-color: #f5f5f5;
  border: 0px;
  border-radius: 10px;
`;

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 28px;
  margin-top: 100px;
`;

const Button = `
display: flex;
width: 240px;
height: 45px;
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
align-items: center;`;

export const LoginPageButton = styled(Link)`
  ${Button}
`;

export const FindPassword = styled(Link)`
  ${Button}
`;

export const FindEmail = styled(Link)`
  ${Button}
`;
