import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 80vh;
  margin: 80px auto 150px auto;
  flex-direction: column;
  align-items: center;
`;

export const RegisterSequence = styled.div`
  margin-bottom: 80px;
`;

export const RegisterSequenceStyle = styled.img`
  width: 250px;
`;

export const MainImageArea = styled.div`
  margin-bottom: 40px;
`;

export const MainImageStyle = styled.img`
  position: relative;
  z-index: 1;
`;

export const FootImageStyle = styled.img`
  position: absolute;
`;

export const SuccessTextArea = styled.div`
  margin-bottom: 80px;
`;

export const SuccessText = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.96px;
`;

export const RegisterButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const RegisterButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  text-decoration: none;
  padding: 13px 25px;
  border: none;
  border-radius: 16px;
  background-color: #4ec1bf;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
