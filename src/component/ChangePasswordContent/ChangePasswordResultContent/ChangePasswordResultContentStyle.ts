import styled from "styled-components";
import { Link } from "react-router-dom";

import characterImage from "../../../assets/icons/Group.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 350px auto 0 auto;
`;

export const CharacterImage = styled.div`
  width: 101px;
  height: 148.344px;
  background-image: url(${characterImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ChangePasswordResultTitle = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.96px;
  margin: 40px 0 40px 0;
`;

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
  margin-top: 50px;
`;
