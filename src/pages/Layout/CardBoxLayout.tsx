import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif !important;
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
  padding: 86px 0px;
  border-radius: 32px;
  background: white;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.09);
  > div {
    margin: auto;
  }
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
const SubTitle = styled.h2<{ subtitle: string | undefined }>`
  margin: 0px auto 57px auto;
  padding: 0px 0px 0px 0px;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  width: 100%;
  span {
    display: block;
    color: #000;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px; /* 180% */
    margin-top: 24px;
  }
`;

interface IDefaultLayout {
  children: React.ReactNode;
  bg: string;
  title: string;
  subtitle?: string;
}

export default function CardBoxLayout({ children, ...props }: IDefaultLayout & HTMLAttributes<HTMLDivElement>) {
  return (
    <Container {...props}>
      <SubContainer>
        <SubVisual $bg={props.bg} />
        <Box>
          <div>
            <SubTitle subtitle={props.subtitle}>
              {props.title}
              {props.subtitle ? <span>{props.subtitle}</span> : ''}
            </SubTitle>
            {children}
          </div>
        </Box>
      </SubContainer>
    </Container>
  );
}
