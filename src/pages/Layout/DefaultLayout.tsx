import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem 0 3rem 0;
`;

interface IDefaultLayout {
  children: React.ReactNode;
}

export default function DefaultLayout({
  children,
  ...props
}: IDefaultLayout & HTMLAttributes<HTMLDivElement>) {
  return <Container {...props}>{children}</Container>;
}
