import styled from "styled-components";
export const SearchWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  gap: 20px;
  padding: 10px 0;
  input:focus {
    outline: none;
  }
  @media (max-width: 545px) {
    gap: 10px;
  }
`;
export const DropDown = styled.div`
  font-size: 14px;
  color: #000;
  padding: 8px 8px;
  border-radius: 16px;
  position: relative;
`;
export const Selected = styled.div`
  width: 170px;
  border-radius: 16px;
  border: 1px solid #dddddd;
  padding: 8px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  color: #939393;
  cursor: pointer;
  @media (max-width: 545px) {
    padding: 8px 15px;
    width: 120px;
  }
  @media (max-width: 440px) {
    padding: 8px 15px;
    width: 80px;
  }
`;
export const DropDownWrap = styled.div`
  width: 170px;
  box-shadow: 1px 5px 10px 3px raba(0, 0, 0);
  padding: 0 15px;
  border-radius: 16px;
  position: absolute;
  background-color: #fff;
  div.sel {
    border-top: 0.5px solid #eee;
    padding: 15px;
    cursor: pointer;
  }
  @media (max-width: 545px) {
    width: 120px;
  }
  @media (max-width: 440px) {
    width: 80px;
  }
`;
export const DisNone = styled.div`
  display: none;
`;

export const Input = styled.input`
  background: #f5f5f5;
  color: #939393;
  border: none;
  border-radius: 16px;
  padding: 0 20px;
  height: 50px;
  font-size: 14px;
  @media (max-width: 545px) {
    padding: 0 25px;
    width: 120px;
  }
  @media (max-width: 440px) {
    padding: 0 25px;
    width: 80px;
  }
`;
export const Button = styled.button`
  background: #4ec1bf;
  color: #fff;
  border: none;
  border-radius: 16px;
  padding: 0 39px;
  font-size: 14px;
  font-weight: 700;
  height: 50px;
  cursor: pointer;
`;
