import styled from "styled-components";

const CustomButton = styled.button<{
  weight: number;
  size: number;
  customwidth: number;
  customheight: number;
}>`
  width: ${(props) => props.customwidth}px;
  height: ${(props) => props.customheight}px;
  border-radius: 16px;
  border: none;
  background: #4ec1bf;
  gap: 10px;
  color: #ffffff;
  font-family: Noto Sans KR;
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  line-height: 23px;
  letter-spacing: -0.03em;
  cursor: pointer;
`;

interface IButtonProps {
  children: React.ReactNode;
  weight: number;
  size: number;
  width: number;
  height: number;
}

const Button = ({ children, weight, size, width, height }: IButtonProps) => {
  return (
    <CustomButton
      weight={weight}
      size={size}
      customwidth={width}
      customheight={height}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
