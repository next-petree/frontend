import styled from 'styled-components';
interface ButtonProps {
  bgcolor: string;
  buttonwidth: string;
  buttonheight: string;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgcolor};
  border: none;
  border-radius: 14px;
  width: ${(props) => props.buttonwidth};
  height: ${(props) => props.buttonheight};
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
