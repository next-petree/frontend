import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 70%;
  height: 35%;
  margin: auto;
  align-items: center;
  flex-direction: column;
  padding-top: 2%;
`;

export const MainBreedText = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const DogProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 65%;
`;

export const DogProfile = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  margin-top: 20px;
`;

export const DogImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 30px;
  background-color: yellow;
  margin-bottom: 10px;
`;

export const DogName = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;
