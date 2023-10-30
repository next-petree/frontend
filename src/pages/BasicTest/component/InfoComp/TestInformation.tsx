// 코드 파일
import React from 'react';
import {
  Wrapper,
  TitleWrap,
  ImgWrap,
  Title,
  Text,
} from './TestInformationStyle';

type TestInfoProps = {
  title: string;
  text: JSX.Element | string;
  img: string;
};

function TestInformation(props: TestInfoProps) {
  console.log(props);
  return (
    <Wrapper>
      <ImgWrap src={props.img}></ImgWrap>
      <TitleWrap>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
      </TitleWrap>
    </Wrapper>
  );
}
export default TestInformation;
