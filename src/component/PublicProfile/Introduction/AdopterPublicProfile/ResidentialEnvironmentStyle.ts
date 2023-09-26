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

export const ResidentialEnvironmentText = styled.div`
  width: 100%;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
`;

export const ResidentialEnvironmentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const RoomDivision = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 200px;
  margin-top: 15px;
`;

export const RoomDivisionImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: yellow;
  margin-bottom: 10px;
`;

export const RoomDivisionName = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
