import styled from 'styled-components';
import { HTMLAttributes } from 'react';

interface ISideMenu {
  label: string;
  state: boolean;
}

export default function SideMenuButton({ label, state, ...props }: ISideMenu & HTMLAttributes<HTMLButtonElement>) {
  return (
    <Button {...props} state={state}>
      {label}
    </Button>
  );
}

const Button = styled.button<{ state: boolean }>`
  padding: 24px;
  background-color: ${({ state }) => (state ? '#F5F5F5' : '#ffffff')};
  color: ${({ theme }) => theme.colors.black333};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.6px;
`;
