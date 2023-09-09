import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

const Box = styled.div`
  position: relative;
  top: -6.5rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 1420px;
  min-height: 300px;
  box-sizing: border-box;
  padding: 86px;
  border-radius: 32px;
  background: white;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.09);
`;
const SubContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const SubVisual = styled.div<{ $bg: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 383px;
  background-image: url(${(props) => props.$bg});
  background-position: center;
`;
const SubTitle = styled.h2`
  margin: 0px auto 57px auto;
  padding: 0;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  width: 100%;
`;

interface IDefaultLayout {
  children: React.ReactNode;
  bg: string;
  title: string;
}

export default function CardBoxLayout({ children, ...props }: IDefaultLayout & HTMLAttributes<HTMLDivElement>) {
  return (
    <Container {...props}>
      <SubContainer>
        <SubVisual $bg={props.bg} />
        <Box>
          <SubTitle>{props.title}</SubTitle>
          {children}
        </Box>
      </SubContainer>
    </Container>
  );
}
