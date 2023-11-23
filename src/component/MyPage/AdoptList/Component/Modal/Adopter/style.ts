import styled from 'styled-components';
export const Td = styled.td`
  width: 16%;
`;
export const DetailButton = styled.button`
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  background: #4ec1bf;
  border: none;
  border-radius: 10px;
  padding: 12px 15px;
  cursor: pointer;
`;
export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow-y: auto;
`;
export const Modal = styled.div`
  top: 0;
  bottom: 10vh;
  padding: 20px 20px 50px;
  width: 60%;
  background: #fff;
  border-radius: 32px;
  position: relative;
  overflow: auto;
  z-index: 10000;
`;

export const ContentWrap = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const Title = styled.h3`
  text-align: left;
  color: #000;
  font-size: 23px;
  font-weight: 800;
  margin: 20px 0 30px;
`;
export const InfoWrap = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  align-items: center;
  gap: 3%;
  padding: 20px 0;
`;
export const Img = styled.img`
  object-fit: cover;
`;
export const DetailInfoWrap = styled.div`
  color: #333333;
  font-size: 13px;
  font-weight: 500;
  div {
    line-height: 25px;
  }
`;
export const DogName = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
export const BreedDog = styled.div``;
export const Gender = styled.div``;
export const BDay = styled.div``;
