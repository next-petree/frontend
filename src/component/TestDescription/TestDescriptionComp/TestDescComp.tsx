// 코드 파일
import React from 'react';
import {
  TestDescCompWrapper,
  Wrapper,
  TitleWrap,
  ImgWrap,
  Title,
  Text,
} from './TestDescCompStyle';

type TestInfoProps = {
  title: string;
  text: JSX.Element | string;
  img: string;
};

function TestInformation(props: TestInfoProps) {
  return (
    <TestDescCompWrapper>
      <Wrapper>
        <ImgWrap src={props.img}></ImgWrap>
        <TitleWrap>
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
        </TitleWrap>
      </Wrapper>
    </TestDescCompWrapper>
  );
}
export default TestInformation;
