import styled from 'styled-components';
interface ButtonProps {
  bgColor: string;
  buttonWidth: string;
  buttonHeight: string;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: 14px;
  width: ${(props) => props.buttonWidth};
  height: ${(props) => props.buttonHeight};
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
