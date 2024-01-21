import styled from "styled-components";

export const SelectContainer = styled.div`
  width: 240px;
  display: flex;
  justify-content: center;

  position: relative;
`;

export const CustomSelect = styled.input`
  // used to deactivate the defualt system level
  appearance: none;

  width: 100%;
  height: 48px;
  border: 1px solid #dddddd;
  border-radius: 16px;
  padding: 0 30px;
  background-color: #ffffff;

  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #939393;

  cursor: pointer;
`;

export const SelectIconContainer = styled.div<{ isclicked: boolean }>`
  width: 32px;
  height: 32px;
  font-size: 16px;
  color: #4ec1bf;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${(props) => (props.isclicked ? "rotate(180deg)" : "rotate(0)")};

  position: absolute;
  top: 7px;
  right: 4px;

  cursor: pointer;
`;

export const SelectUl = styled.ul`
  width: 240px;
  position: absolute;
  top: 50px;

  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  box-shadow: 0px 14px 20px 0px #3a3a3a14;
  list-style-type: none;

  margin: 0;
  padding: 0;
  z-index: 999;

  cursor: pointer;
`;

export const SelectLi = styled.li`
  /* width: 100%; */
  height: 58px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  border-radius: 16px;
  border-bottom: 1px solid #eeeeee;

  padding: 0px 20px;
  gap: 10px;

  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #000000;

  &:hover {
    background: #4ec1bf;
  }
`;
