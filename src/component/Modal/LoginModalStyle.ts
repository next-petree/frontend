import styled from 'styled-components';

export const Modal = styled.div`
  width: 300px;
  height: 168px;
  position: absolute;
  top: 8%;
  right: 12%;

  background: #fff;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  button {
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
    border-radius: 16px;
    width: 60%;
    height: 52px;
    cursor: pointer;
  }
  button:nth-child(1):hover {
    background: #35d8d5;
  }
`;
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  line-height: 26px;
`;
export const Img = styled.img`
  width: 33px;
  height: 33px;
`;
export const LoginBtn = styled.button`
  background: #4ec1bf;
  border: none;
  color: #fff;
`;
export const LogoutBtn = styled.button`
  color: #4ec1bf;
  background: #fff;
  border: 1px solid #4ec1bf;
`;
