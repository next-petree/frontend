import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 400px;
  margin-top: 5%;
  margin-bottom: 8%;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  margin: 50px;
`;

export const MainBreedLabel = styled.div`
  width: 100%;
  margin-top: 100px;
  font-size: 30px;
  font-weight: bold;
`;

export const MainBreedInputButton = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 30px;
`;

export const MainBreedInput = styled.input`
  width: 300px;
  height: 45px;
  border-radius: 15px;
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 15px 25px;
  cursor: pointer;
  border: none;
  font-size: 14px;
  border-radius: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const MainBreedSearchButton = styled(Button)`
  padding: 15px 45px;
`;

//저장버튼

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SaveButton = styled(Button)`
  width: 30%;
  margin-top: 30px;
`;
