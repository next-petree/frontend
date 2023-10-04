import styled from "styled-components";
import DeleteMyAccount from "./DeleteMyAccount";

export const Container = styled.div`
  width: 1000px;
  height: 1000px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 8%;
`;

export const Content = styled.div`
  margin: 100px;
`;

export const DeleteMyAccountLabel = styled.label`
  width: 100%;
  height: 100px;
  font-size: 30px;
  font-weight: bold;
  display: block;
`;

export const AccountDeletionTermsLabel = styled.label`
  display: block;
  font-size: 20px;
`;

export const AccountDeletionTermsTextArea = styled.textarea`
  width: 100%;
  height: 400px;
  padding: 30px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
  border: none;
  box-sizing: border-box;
  resize: none;
  font-size: 20px;
`;

export const CheckTermArea = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const CheckAgreeMent = styled.label``;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 180px;
  gap: 20px;
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

export const CancelButton = styled(Button)`
  width: 30%;
  background-color: #000;
`;

export const DeleteButton = styled(Button)`
  width: 30%;
`;
