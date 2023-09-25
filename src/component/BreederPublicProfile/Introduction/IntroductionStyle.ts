import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 15%;
  height: 40%;
  border-radius: 40px;
  background-color: #bbb;
`;

//------------유저 정보란------------
export const UserInfo = styled.div`
  position: relative;
  top: -40px;
  width: 70%;
  height: 30%;
  margin: auto;
  background-color: red;
`;

export const UserImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: auto;
  background-color: black;
`;

export const UserName = styled.div`
  display: flex;
  height: 20%;
  margin-top: 20px;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  background-color: #555;
`;

export const UserAddress = styled.div`
  display: flex;
  height: 20%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  background-color: #555;
`;

//------------자기소개란------------
export const Introduce = styled.div`
  display: flex;
  margin: auto;
  width: 70%;
  height: 30%;
  flex-direction: column;
  align-items: center;
  background-color: #666;
`;

export const IntroductionText = styled.div`
  text-align: center;
  margin-top: 3%;
`;

export const HashTag = styled.div`
  display: flex;
  width: 30%;
  height: 20%;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  border-radius: 40px;
  background-color: #fff;
`;

export const HeadLine = styled.div`
  text-align: center;
  margin-top: 3%;
`;

//------------주력견종란------------
export const MainBreed = styled.div`
  display: flex;
  width: 70%;
  height: 35%;
  margin: auto;
  align-items: center;
  flex-direction: column;
  padding-top: 2%;
  background-color: #777;
`;

export const MainBreedText = styled.div`
  text-align: center;
`;

export const DogProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 110px;
  height: 150px;
  margin-top: 3%;
  background-color: pink;
`;

export const DogImage = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 30px;
  background-color: yellow;
`;

export const DogName = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
