import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 1250px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const InnerContainer = styled.div`
  margin: 50px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 80px;
`;

export const AddMyPetLabel = styled.div`
  font-size: 30px;
`;

export const GoBackButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
`;

export const Arrow = styled.div`
  padding: 20px 25px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 15px;
`;

//공통 스타일
const Label = styled.label`
  display: block;
  font-size: 25px;
`;

const MiddleContentDiv = styled.div`
  width: 100%;
  height: 100px;
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

export const MiddleContent = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  margin-top: 10px;
  gap: 110px;
`;

export const LeftContent = styled.div`
  flex: 1;
  width: 45%;
`;

export const DogName = styled(MiddleContentDiv)``;

export const DogNameLabel = styled(Label)`
  display: block;
  font-size: 25px;
`;

export const DogNameInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-top: 10px;
  background-color: #ccc;
  border: 1px solid #555;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const DogType = styled(MiddleContentDiv)``;

export const DogTypeLabel = styled(Label)``;

export const DogTypeInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-top: 10px;
  background-color: #ccc;
  border: 1px solid #555;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const RightContent = styled.div`
  flex: 1;
`;

export const DogBirthDay = styled(MiddleContentDiv)``;

export const DogBirthDayLabel = styled(Label)``;

export const BirthDayInputArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const DogBirthYearInput = styled.select`
  width: 30%;
  height: 40px;
  padding: 10px;
  background-color: #ccc;
  border: 1px solid #555;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const DogBirthMonthInput = styled.select`
  width: 30%;
  height: 40px;
  padding: 10px;
  background-color: #ccc;
  border: 1px solid #555;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const DogBirthDayInput = styled.select`
  width: 30%;
  height: 40px;
  padding: 10px;
  background-color: #ccc;
  border: 1px solid #555;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const DogGender = styled(MiddleContentDiv)``;

export const DogGenderLabel = styled(Label)``;

export const DogGenderInput = styled.select`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #ccc;
  border: 1px solid #555;
  box-sizing: border-box;
`;

export const AdoptionStatus = styled(MiddleContentDiv)``;

export const AdoptionStatusLabel = styled(Label)``;

export const AdoptionStatusInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #ccc;
  border: 1px solid #555;
  box-sizing: border-box;
`;

export const AdditionalInformation = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 10px;
`;

export const AdditionalInformationLabel = styled(Label)``;

export const AdditionalInformationTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #ccc;
  border: 1px solid #555;
  box-sizing: border-box;
  resize: none;
`;

export const ImageUpload = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 10px;
`;

export const ImageUploadLabel = styled(Label)``;

export const ImageContent = styled.div`
  margin-top: 40px;
  width: 25%;
  height: 230px;
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 150px;
  background-color: yellow;
  border-radius: 15px;
`;

export const ImageUploadButton = styled(Button)`
  width: 100%;
  height: 50px;
  margin-top: 31px;
`;

export const ButtonContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 8%;
  gap: 20px;
`;

export const EditButton = styled(Button)`
  width: 20%;
`;

export const DeleteButton = styled(Button)`
  width: 20%;
  background-color: #000;
`;

export const SaveButton = styled(Button)`
  width: 30%;
`;
