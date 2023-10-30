import React from 'react';
import {
  Question,
  ExamAnswer,
  Solution,
  AnswerBox,
  CorrectAnswer,
  PickedAnswer,
} from './AnswerCompStyle';
type AnswerProps = {
  num: string;
};

export default function AnswerComp(props: AnswerProps) {
  return (
    <AnswerBox>
      <Question>{props.num}. 문제</Question>
      <CorrectAnswer>1번 정답</CorrectAnswer>
      <ExamAnswer>2번</ExamAnswer>
      <ExamAnswer>3번</ExamAnswer>
      <ExamAnswer>4번</ExamAnswer>
      <PickedAnswer>5번 선택한 답변</PickedAnswer>
      <Solution>해답! 내용 쭉쭉</Solution>
    </AnswerBox>
  );
}
