import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5%;
  margin-bottom: 8%;
  height: 55%;
  border-radius: 40px;
  background-color: #555;
`;

export const ContentBox = styled.div`
  width: 80%;
  height: 90%;
  background-color: #eee;
`;
export const OwnedBreedsText = styled.div`
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const OwnedBreedsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 300px;
  background-color: pink;
`;

export const DogImage = styled.div`
  width: 100%;
  height: 60%;
  border-radius: 20px;
  background-color: yellow;
`;

export const DogTextInfomation = styled.div`
  width: 80%;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const DogType = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const DogName = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const DogBirthDay = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 20%;
`;

export const DetailButton = styled.button`
  color: #fff;
  width: 40%;
  height: 100%;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  background-color: #555;
`;
