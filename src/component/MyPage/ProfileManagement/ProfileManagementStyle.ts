import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 950px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  margin: 50px;
`;

export const ProfileImageContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: green;
`;

export const ProfileManagementLabel = styled.div`
  width: 100%;
  height: 50px;
  margin: 15px 0;
  font-size: 30px;
  font-weight: bold;
`;

export const AuthenticationStatusChecker = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const AuthenticationStatusCheckerLabel = styled(Label)``;

export const AuthenticationStatusCheckerInput = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 15px;
`;

export const SelfIntroduction = styled.div`
  width: 100%;
  height: 300px;
`;

export const SelfIntroductionLabel = styled(Label)``;

export const SelfIntroductionInput = styled.input`
  width: 100%;
  height: 300px;
  border-radius: 15px;
`;

//저장버튼
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SaveButton = styled(Button)`
  width: 30%;
  margin-top: 30px;
`;
