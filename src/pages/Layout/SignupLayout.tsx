import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin: 6rem 0;
`;

interface IDefaultLayout {
  children: React.ReactNode;
}

export default function SignupLayout({ children, ...props }: IDefaultLayout & HTMLAttributes<HTMLDivElement>) {
  return <Container {...props}>{children}</Container>;
}
