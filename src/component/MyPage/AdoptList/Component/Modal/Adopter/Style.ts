import styled from "styled-components";

export const Background = styled.div`
  position: fixed; // 고정 위치
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  width: 33.5%;
  height: 45%;
  padding: 0px 50px;
  border-radius: 15px;
  background-color: #fff;
  @media (max-width: 1100px) {
    width: 60%;
    height: 55%;
  }
  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 17%;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const InfoWrap = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  gap: 25px;
`;

export const DogImage = styled.img`
  width: 200px;
  height: 100%;
  border-radius: 12px;
  background-color: #bbb;
`;

export const RightContent = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.8;
  font-weight: 600;
`;

export const TopContent = styled.div``;

export const DogName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DogType = styled.div`
  font-size: 15px;
`;

export const DogGender = styled.div`
  font-size: 15px;
`;

export const DogBirthDay = styled.div`
  font-size: 15px;
`;

export const BottomContent = styled.div``;

export const BreederName = styled.div`
  font-size: 15px;
`;

export const BreederPhoneNumber = styled.div`
  font-size: 15px;
`;

export const BreederLocation = styled.div`
  font-size: 15px;
`;

export const ButtonWrap = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button`
  width: 200px;
  height: 42px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background: #4ec1bf;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;
