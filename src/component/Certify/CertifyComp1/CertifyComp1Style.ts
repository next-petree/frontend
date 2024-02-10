import styled from "styled-components";

export const CertificateWrap = styled.div``;
export const CertificateName = styled.div`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const CertWrap = styled.div`
  border: 1px solid #969696;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px 28px;
  @media (max-width: 1100px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0px;
  }
`;
export const CertificateImg = styled.img`
  width: 300px;
  height: 400px;
`;
export const DescriptionWrap = styled.div`
  width: 70%;
`;
export const Description1 = styled.ul`
  font-size: 20px;
  line-height: 31px;
`;
export const Description2 = styled.ul`
  font-size: 20px;
  float: right;
  text-align: right;
  list-style: none;
  line-height: 29px;
`;
export const Btn = styled.button`
  float: right;
  background: #4ec1bf;
  border: none;
  color: #fff;
  width: 320px;
  height: 52px;
  border-radius: 16px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  @media (max-width: 1100px) {
    width: 100%;
  }
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
  padding: 50px 20px 120px;
  width: 80%;
  height: 80vh;
  background: #fff;
  border-radius: 32px;
  position: relative;
  overflow: auto;
  z-index: 10000;
`;
