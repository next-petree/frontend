import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 700px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const UserProfileEditLabel = styled.h1`
  font-size: 30px;
  margin: 80px 0 30px 30px;
`;

export const ContentBox = styled.div`
  display: flex;
  background: #fff;
`;

export const LeftContentArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  flex: 1;
`;

export const RightContentArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  flex: 1;
`;

//공통 적용 스타일
const FieldContainer = styled.div`
  margin-bottom: 50px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
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

//회원유형
export const UserTypeSelector = styled(FieldContainer)``;

export const UserTypeSelectorLabel = styled(Label)``;

export const UserTypeSelectorSelect = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #888;
`;

//이메일
export const UserEmail = styled(FieldContainer)``;

export const UserEmailLabel = styled(Label)``;

export const UserEmailInput = styled(Input)``;

export const UserAdress = styled(FieldContainer)`
  display: flex;
  flex-direction: column;
`;

//휴대전화
export const UserPhoneNumber = styled(FieldContainer)``;

export const UserPhoneNumberLabel = styled(Label)``;

export const UserPhoneNumberInput = styled(Input)``;

//닉네임
export const UserNickName = styled(FieldContainer)``;

export const InputWithButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserNickNameLabel = styled(Label)``;

export const UserNickNameInput = styled(Input)`
  flex: 1;
  margin-right: 10px;
`;

export const ValidationButton = styled(Button)``;

//활동지역
export const UserAdressLabel = styled(Label)``;

export const UserAdressInput = styled(Input)`
  flex: 1;
  margin-right: 10px;
`;

export const SearchAddressButton = styled(Button)``;

export const UserAdressInputDetail = styled(Input)`
  margin-top: 10px;
`;

//저장버튼
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SaveButton = styled(Button)`
  width: 30%;
`;
