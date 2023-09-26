import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 20%;
  height: 800px;
  border-radius: 40px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

//------------유저 정보란------------
export const UserInfo = styled.div`
  position: relative;
  top: -70px;
  width: 70%;
  height: 30%;
  margin: auto;
`;

export const UserImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: auto;
  background-color: black;
`;

export const UserName = styled.div`
  display: flex;
  height: 30px;
  margin-top: 20px;
  font-size: 25px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const UserAddress = styled.div`
  display: flex;
  height: 30px;
  margin-top: 20px;
  font-size: 15px;
  align-items: center;
  justify-content: center;

  span:first-child {
    margin-right: 35px;
  }
`;

//------------자기소개란------------
export const Introduce = styled.div`
  display: flex;
  margin: auto;
  width: 70%;
  height: 30%;
  flex-direction: column;
  align-items: center;
`;

export const IntroductionText = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const HashTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const HashTag = styled.div`
  display: flex;
  width: 30%;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  border-radius: 40px;
  border: 2px solid #000;
`;

export const HeadLine = styled.div`
  text-align: center;
  margin-top: 50px;
`;
