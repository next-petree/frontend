import React from 'react';
import {
  Wrapper,
  AnswerTitle,
  SubTitle,
  AnswerWrapper,
  Btn,
} from './AnswerStyle';
import AnswerComp1 from './AnswerComp1/AnswerComp1';
import Header from '../Header/Header';

export default function AnswerComp() {
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  return (
    <Wrapper>
      <AnswerTitle>해답지</AnswerTitle>
      <SubTitle>반려인 지식 문제은행</SubTitle>
      <AnswerWrapper>
        {nums.map((v, i) => (
          <AnswerComp1 key={i} num={v} />
        ))}
      </AnswerWrapper>
      <Btn>확인</Btn>
    </Wrapper>
  );
}
