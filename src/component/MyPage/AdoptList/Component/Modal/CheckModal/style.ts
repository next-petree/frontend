import styled from 'styled-components';
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
  width: 80%;
  background: #fff;
  border-radius: 32px;
  position: relative;
  overflow: auto;
  z-index: 10000;
`;
export const BtnWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 3%;
`;
