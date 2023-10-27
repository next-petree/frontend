import styled from "styled-components";

export const ContentArea = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const PetTreeIcon = styled.div`
  width: 100px;
  height: 100px;
  background: url(../../assets/icons/pets_black_24dp.jpg);
  background-size: cover;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const SubTitle1 = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const SubTitle2 = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

const FormArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const EmailFormArea = styled(FormArea)``;
export const PassWordFormArea = styled(FormArea)``;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const EmailText = styled(Text)``;
export const PassWordText = styled(Text)``;

const InputForm = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const EmailInputForm = styled(InputForm)``;
export const PassWordForm = styled(InputForm)`
  type: password; // 비밀번호 필드로 설정
`;

export const FindIdOrPassWordArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const FindIdButton = styled.button`
  background-color: transparent;
  border: none;
`;
export const FindPassWordButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const LoginOrSignUpButtonArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BasicLoginButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #2d9cdb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const KakaoLoginButton = styled(BasicLoginButton)`
  background-color: #ffe812;
  color: black;
`;

export const SignUpButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const SignUpButton = styled.button`
  background-color: transparent;
  border: none;
  color: #2d9cdb;
  cursor: pointer;
  margin-left: 5px;
`;
