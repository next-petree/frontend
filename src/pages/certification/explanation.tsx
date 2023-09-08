import { styled } from 'styled-components';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { IOutletContext } from '.';
import Question from 'components/certification/Question';
import Button from 'components/common/button/Button';
import { PATHS } from '../../constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 106.25rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-top: 14.5rem;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 7.62rem;
`;

const QuizContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  gap: 4.5rem;
  margin-bottom: 7rem;
  > div {
    display: flex;
    flex-direction: column;
    gap: 3.75rem;
  }
`;

export default function Explanation() {
  const { questions } = useOutletContext<IOutletContext>();
  const navigate = useNavigate();

  return (
    <Container>
      <Title>반려인 지식 문제은행</Title>
      <QuizContainer>
        <div>
          {questions.slice(0, 6).map(({ id, questionText, choices }, index) => (
            <Question
              answerSheet
              key={index}
              questionId={id}
              questionNumber={index + 1}
              question={questionText}
              choices={choices}
            />
          ))}
        </div>
        <div>
          {questions.slice(6).map(({ id, questionText, choices }, index) => (
            <Question
              answerSheet
              key={index}
              questionId={id}
              questionNumber={index + 7}
              question={questionText}
              choices={choices}
            />
          ))}
        </div>
      </QuizContainer>
      <Button
        style={{
          marginBottom: '12rem',
        }}
        onClick={() => {
          navigate(PATHS.certification.result);
        }}
      >
        확인
      </Button>
    </Container>
  );
}
