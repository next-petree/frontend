import React from 'react';
import { Button } from './style';

interface ButtonProps {
  children: React.ReactNode;
  bgcolor: string;
  buttonwidth: string;
  buttonheight: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const PrimaryButton = ({
  children,
  bgcolor,
  buttonwidth,
  buttonheight,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      bgcolor={bgcolor}
      buttonwidth={buttonwidth}
      buttonheight={buttonheight}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
