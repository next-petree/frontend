import React from 'react';
import {
  Wrapper,
  Header,
  AnswerTitle,
  SubTitle,
  AnswerWrapper,
  Btn,
} from './AnswerStyle';
import AnswerComp from '../component/AnswerComp/AnswerComp';

export default function Answer() {
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  return (
    <Wrapper>
      <Header>header</Header>
      <AnswerTitle>해답지</AnswerTitle>
      <SubTitle>반려인 지식 문제은행</SubTitle>
      <AnswerWrapper>
        {nums.map((v, i) => (
          <AnswerComp key={i} num={v} />
        ))}
      </AnswerWrapper>
      <Btn>확인</Btn>
    </Wrapper>
  );
}
