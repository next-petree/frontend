import styled from "styled-components";

export const Wrapper = styled.div``;

export const PetreeIcon = styled.img``;

export const Petree = styled.img``;

export const CertifyModal = styled.div`
  position: relative;
  background: #fff;
  max-width: 80%;
  margin: 250px auto;
  padding: 100px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  border-radius: 32px;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
  p,
  h4 {
    margin: 0;
  }
  @media (max-width: 1100px) {
    padding: 20px;
  }
`;

export const Title = styled.h4`
  font-size: 28px;
`;
export const Desc = styled.p`
  font-size: 20px;
  padding-top: 20px;
`;

export const FormWrap = styled.div``;

export const FormTitle = styled.h4`
  font-size: 24px;
  padding-bottom: 10px;
  line-height: 35px;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
  }
  [type="radio"] {
    appearance: none;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    border: 1px solid #c7c7cc;
    border-radius: 50%;
  }
  [type="radio"]:checked {
    border: 3px solid #fff;
    box-shadow: 0 0 0 1px #4ec1bf;
    background-color: #4ec1bf;
  }
`;

export const SubmitBtn = styled.input`
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  font-weight: 700;
  background: #4ec1bf;
  width: 240px;
  height: 58px;
  border: none;
  border-radius: 16px;
  color: #fff;
`;

export const FileBox = styled.div`
  width: 360px;
  height: 58px;
  label {
    font-size: 16px;
    width: 90%;
    display: inline-block;
    padding: 19px;
    vertical-align: middle;
    background: #f5f5f5;
    border-radius: 16px;
    color: #939393;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;
