import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  AnswerTitle,
  SubTitle,
  AnswerWrapper,
  Btn,
} from './AnswerStyle';
import AnswerComp1 from './AnswerComp1/AnswerComp1';

type QuestionType = {
  id: number;
  questionText: string;
  choices: Array<{ id: number; choiceText: string }>;
}[];

type AnswersType = {
  questionId: number;
  selectedChoiceId: number;
}[];
type ResultType = {
  explanations: {
    questionId: number;
    explanationText: string;
    correctChoiceId: number;
  }[];
  passed: boolean;
  score: number;
};

export default function AnswerComp() {
  const navigate = useNavigate();
  const storedQuestions: QuestionType = JSON.parse(
    localStorage.getItem('questions') || '[]'
  );
  const storedUserAnswers: AnswersType = JSON.parse(
    localStorage.getItem('userAnswers') || '[]'
  );
  const storedResult: ResultType = JSON.parse(
    localStorage.getItem('result') || '{}'
  );

  function moveBack() {
    navigate(-1);
  }
  console.log('storedQuestions', storedQuestions);
  console.log('storedResult', storedResult.explanations);

  return (
    <Wrapper>
      <AnswerTitle>해답지</AnswerTitle>
      <SubTitle>반려인 지식 문제은행</SubTitle>
      <AnswerWrapper>
        {storedQuestions.map((question, index) => {
          const result = storedResult.explanations.find(
            (res) => res.questionId === question.id
          );
          return (
            <AnswerComp1
              id={question.id}
              questionId={question.id}
              key={index}
              num={index}
              question={question.questionText}
              choices={question.choices}
              solution={result?.explanationText || ''}
              correctChoiceId={result?.correctChoiceId}
            />
          );
        })}
      </AnswerWrapper>
      <Btn
        onClick={() => {
          moveBack();
        }}
      >
        확인
      </Btn>
    </Wrapper>
  );
}
