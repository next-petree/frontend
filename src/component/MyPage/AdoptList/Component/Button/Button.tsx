import React from 'react';
import { Button } from './style';

interface ButtonProps {
  children: React.ReactNode;
  bgColor: string;
  buttonWidth: string;
  buttonHeight: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const PrimaryButton = ({
  children,
  bgColor,
  buttonWidth,
  buttonHeight,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      bgColor={bgColor}
      buttonWidth={buttonWidth}
      buttonHeight={buttonHeight}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
