import styled from "styled-components";
import petTreeIconImage from "../../assets/icons/pets_black_24dp.jpg";

export const Container = styled.div`
  display: flex;
  margin: 150px auto 0 auto;
  flex-direction: column;
  align-items: center;
`;

export const PetTreeTitleArea = styled.div`
  display: flex;
  gap: 22px;
`;

export const PetTreeIcon = styled.div`
  width: 72px;
  height: 72px;
  background: url(${petTreeIconImage});
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: #4fd4d2;
  font-family: "LotteriaChab";
  font-size: 40px;
  font-weight: 400;
`;

export const SubTitle1 = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  color: #4fd4d2;
  font-family: Noto Sans KR;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -2px;
`;

export const SubTitle2 = styled.div`
  height: 70px;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.96px;
`;

export const ContentArea = styled.div`
  width: 330px;
  display: flex;
  margin-right: 65px;
  flex-direction: column;
`;

const FormArea = styled.div`
  display: flex;
  width: 332px;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

export const EmailFormArea = styled(FormArea)`
  display: flex;
  gap: 30px;
  margin-bottom: 15px;
`;
export const PassWordFormArea = styled(FormArea)`
  display: flex;
  gap: 20px;
`;

const Text = styled.p`
  font-size: 16px;
  font-family: Noto Sans KR;
`;

export const EmailText = styled(Text)`
  width: 50px;
`;
export const PassWordText = styled(Text)`
  width: 60px;
`;

const InputForm = styled.input`
  width: 240px;
  height: 25px;
  padding: 10px;
  font-size: 16px;
  background-color: #f5f5f5;
  border: 0px;
  border-radius: 10px;
`;

export const EmailInputForm = styled(InputForm)``;
export const PassWordForm = styled(InputForm)``;

export const FindIdOrPassWordArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-top: 20px;
  margin-bottom: 80px;
  font-size: 16px;
  font-family: Noto Sans KR;
`;

export const FindIdButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-family: Noto Sans KR;
`;
export const FindPassWordButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-family: Noto Sans KR;
`;

export const LoginOrSignUpButtonArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const BasicLoginButton = styled.button`
  width: 240px;
  height: 45px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #4ec1bf;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: Noto Sans KR;
`;

export const KakaoLoginButton = styled(BasicLoginButton)`
  background-color: #fee500;
  color: #060606;
  margin-top: 10px;
`;

export const SignUpButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 16px;
  font-family: Noto Sans KR;
`;

export const SignUpButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-left: 5px;
  font-family: Noto Sans KR;
`;
