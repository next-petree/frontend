import { styled } from "styled-components";

export const Toggle = styled.label<{ $toggle: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 48px;
  height: 24px;
  border-radius: 16px;
  border: none;
  position: relative;
  background-color: ${(props) => (props.$toggle ? "#4ec1bf" : "#e7e7e7")};
`;

export const Circle = styled.div<{ $toggle: boolean }>`
  position: absolute;
  top: 2px;
  right: ${(props) => (props.$toggle ? "2px" : null)};
  left: ${(props) => (props.$toggle ? null : "2px")};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 2px 8px 0px #00000029;
`;