import React from 'react';
import { Question, ExamAnswer, Solution, AnswerBox } from './AnswerComp1Style';

type AnswerProps = {
  id: number;
  num: number;
  questionId: number;
  question: string;
  choices: Array<{ id: number; choiceText: string }>;
  solution: string;
  correctChoiceId: number | undefined; // correctChoiceId의 타입을 `number | undefined`로 변경
};

export default function AnswerComp1(props: AnswerProps) {
  const { id, questionId, num, question, choices, solution, correctChoiceId } =
    props;
  const choiceLabels = ['①', '②', '③', '④', '⑤'];

  return (
    <AnswerBox>
      <Question>
        {num + 1}. {question}
      </Question>
      {choices.map((choice, i) => (
        <ExamAnswer
          key={choice.id}
          style={choice.id === correctChoiceId ? { color: '#4EC1BF' } : {}}
        >
          {choiceLabels[i]} {choice.choiceText}
        </ExamAnswer>
      ))}
      {id === questionId && <Solution>{solution}</Solution>}
    </AnswerBox>
  );
}
