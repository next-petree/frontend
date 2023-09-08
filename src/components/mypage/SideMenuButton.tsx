import styled from '@emotion/styled';
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
  width: 100%;
  height: 4.4rem;
  font-size: 1.25rem;
  background-color: ${({ state }) => (state ? '#F5F5F5' : '#ffffff')};
  font-weight: 500;
  color: #333;
  letter-spacing: -0.0375rem;
`;
