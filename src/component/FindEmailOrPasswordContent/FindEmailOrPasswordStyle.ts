import styled from "styled-components";
import { Link } from "react-router-dom";
import characterImage from "../../assets/icons/Group.jpg";

export const Container = styled.div`
  display: flex;
  margin: 300px auto 0 auto;
  flex-direction: column;
  align-items: center;
`;

export const FindEmailOrPasswordTitle = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;
  margin-bottom: 10px;
`;

export const ContentArea = styled.div`
  height: 300px;
  display: flex;
  margin-right: 180px;
`;

export const CharacterImage = styled.div`
  width: 159.051px;
  height: 234.449px;
  margin-right: 20px;
  background-image: url(${characterImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const InnerContentArea = styled.div`
  margin-top: 30px;
`;

const FormArea = styled.div`
  display: flex;
  align-items: center;
`;

export const NameFormArea = styled(FormArea)``;

export const PhoneNumberFormArea = styled(FormArea)``;

export const PhoneNumberCheckFormArea = styled(FormArea)`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const NameText = styled.p`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.6px;
  width: 60px;
  margin-right: 25px;
`;

export const PhoneNumberText = styled(NameText)``;

const Form = styled.input`
  width: 240px;
  height: 25px;
  padding: 10px;
  font-size: 16px;
  background-color: #f5f5f5;
  border: 0px;
  border-radius: 10px;
`;

export const NameForm = styled(Form)``;

export const PhoneNumberForm = styled(Form)``;

export const PhoneNumberCheckForm = styled(Form)``;

const Button = styled.button`
  height: 45px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  padding: 0 16px;
  margin-left: 10px;
  color: #fff;
`;

export const PhoneNumberSendButton = styled(Button)`
  background-color: #707070;
`;

export const PhoneNumberCheckButton = styled(Button)`
  background-color: #b7b7b7;
`;

export const FindPasswordButtonArea = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-left: 150px;
`;

export const FindPasswordButton = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  border: none;
  cursor: pointer;
  color: inherit;
  font-family: Noto Sans KR;
  font-size: 16px;
`;

export const FindEmailButton = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  border: none;
  cursor: pointer;
  color: inherit;
  font-family: Noto Sans KR;
  font-size: 16px;
`;

export const CheckButtonArea = styled.div`
  margin-top: 30px;
  margin-right: 30px;
`;

export const CheckButton = styled(Button)`
  width: 260px;
  height: 45px;
  padding: 10px;
  border-radius: 12px;
  background: #4ec1bf;
  color: #fff;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 700;
`;
