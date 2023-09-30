import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 600px;
  margin-top: 5%;
  margin-bottom: 8%;
  border-radius: 20px;
  background-color: #555;
`;

export const PasswordUpdateLabel = styled.h1`
  font-size: 2em;
  margin: 80px 0 30px 30px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background: #fff;
`;

//공통되는 스타일
const DivBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 47px;
`;

const Label = styled.label`
  margin-right: 10px;
  width: 200px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #888;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 15px 20px;
  cursor: pointer;
  border: none;
  font-size: 14px;
  border-radius: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CurrentPassword = styled(DivBox)``;

export const CurrentPasswordLabel = styled(Label)``;

export const CurrentPasswordInput = styled(Input)``;

export const NewPassword = styled(DivBox)``;

export const NewPasswordLabel = styled(Label)``;

export const NewPasswordInput = styled(Input)``;

export const NewPasswordCheck = styled(DivBox)``;

export const NewPasswordCheckLabel = styled(Label)``;

export const NewPasswordCheckInput = styled(Input)``;

//저장버튼
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SaveButton = styled(Button)`
  width: 30%;
`;
