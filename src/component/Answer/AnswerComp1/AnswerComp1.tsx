import React from 'react';
import { Question, ExamAnswer, Solution, AnswerBox } from './AnswerComp1Style';
import { AnswerProps } from '../../../types/index';

export default function AnswerComp1(props: AnswerProps) {
  const {
    id,
    questionId,
    num,
    question,
    choices,
    solution,
    correctChoiceId,
    selectedChoiceId, // selectedChoiceId 추가
  } = props;
  const choiceLabels = ['①', '②', '③', '④', '⑤'];

  return (
    <AnswerBox>
      <Question>
        {num + 1}. {question}
      </Question>
      {choices.map((choice, i) => (
        <ExamAnswer
          key={choice.id}
          style={
            choice.id === correctChoiceId
              ? { color: '#4EC1BF' }
              : choice.id === selectedChoiceId
              ? { color: '#000' }
              : {}
          }
        >
          {choiceLabels[i]} {choice.choiceText}
        </ExamAnswer>
      ))}
      {id === questionId && <Solution>{solution}</Solution>}
    </AnswerBox>
  );
}
