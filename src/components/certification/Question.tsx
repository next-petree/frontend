import { HTMLAttributes, useEffect, useState } from 'react';
import { css, styled } from 'styled-components';
import { Choice, IOutletContext, IExplanation } from 'pages/certification';
import { useOutletContext } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* gap: 0.75rem; */
  max-width: 47.25rem;
`;

const QustionText = styled.h3`
  margin: 0 0 0.75rem 0;
  font-size: 1.75rem;
  line-height: 2.75rem;
`;

const AnswerContainer = styled.ol`
  display: flex;
  flex-direction: column;
`;

const Answer = styled.li<{ selected: boolean; answerSheet?: boolean }>`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.5rem;
  transition: color 0.15s ease-in-out;
  user-select: none;
  color: ${({ selected, theme }) => (selected ? theme.colors.primary : '#333')};

  ${({ answerSheet, selected, theme }) =>
    answerSheet
      ? css`
          color: ${selected ? theme.colors.primary : '#ccc'};
        `
      : css`
          cursor: pointer;
          &:hover {
            color: ${({ theme }) => theme.colors.primary};
          }
        `}
`;

const Explanation = styled.div`
  background-color: #ffeded;
  border-radius: 1rem;
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  max-width: 40rem;
`;

interface QuestionProps extends HTMLAttributes<HTMLDivElement> {
  question: string;
  questionNumber: number;
  choices: Choice[];
  questionId: number;
  answerSheet?: boolean;
}

export default function Question({
  question,
  choices,
  questionNumber,
  questionId,
  answerSheet,
  ...props
}: QuestionProps) {
  const { setAnswers, selected, testResult } = useOutletContext<IOutletContext>();
  const [explain, setExplain] = useState<IExplanation | null>(null);

  const handleAnswerClick = (choiceId: number) => {
    setAnswers((prev) => {
      const p = [...prev];
      const answer = { questionId, selectedChoiceId: choiceId };
      p[questionNumber - 1] = answer;
      return p;
    });
  };

  useEffect(() => {
    if (answerSheet && testResult) {
      setExplain(testResult.explanations.filter((exp) => exp.questionId === questionId)[0]);
    }
  }, [answerSheet, testResult, questionId]);

  return (
    <Container {...props}>
      <QustionText>
        {questionNumber}. {question}
      </QustionText>
      <AnswerContainer>
        {choices.map(({ id, choiceText }) => (
          <Answer
            key={id}
            selected={selected[questionNumber - 1]?.selectedChoiceId === id}
            answerSheet={answerSheet}
            onClick={() => {
              !answerSheet && handleAnswerClick(id);
            }}
          >
            {choiceText}
          </Answer>
        ))}
      </AnswerContainer>
      {answerSheet && explain && <Explanation>{explain.explanationText}</Explanation>}
    </Container>
  );
}
