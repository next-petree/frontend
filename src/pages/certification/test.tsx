import { IOutletContext } from '.';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { styled } from 'styled-components';
import Button, { ButtonColor, ButtonSize } from 'components/common/button/Button';
import { useEffect, useState } from 'react';
import Banner from 'components/certification/Banner';
import { useModal } from 'hooks/useModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 37.5rem;
  border-radius: 2.5rem;
  background-color: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.12);
  margin: 13rem auto 2.5rem auto;
`;

const QuestionNumber = styled.div`
  margin-top: 2.75rem;
  font-size: 1.3125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Qustion = styled.p`
  margin-top: 1.75rem;
  max-width: 26rem;
  text-align: center;
  line-break: auto;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.25rem; /* 180% */
`;

const ChoiceContainer = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1.75rem;
`;

const Choice = styled.li<{ selected: boolean }>`
  display: flex;
  padding: 0.75rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.25rem;
  border-radius: 1.25rem;
  border: 1px solid #ccc;
  width: 25rem;
  font-size: 1rem;
  line-height: 1.5rem; /* 222.222% */
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    background-color: ${({ selected, theme }) => (selected ? theme.colors.primary : '#f5f5f5')};
  }
  background-color: ${({ selected, theme }) => (selected ? theme.colors.primary : theme.colors.white)};
  color: ${({ selected, theme }) => (selected ? theme.colors.white : '#333')};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.19rem;
  margin: 4rem auto 5rem auto;
  justify-content: center;
  align-items: center;
`;

export default function Test() {
  const { questions, submitTest, selectAnswer, answers } = useOutletContext<IOutletContext>();
  const { id: idParam } = useParams<{ id: string }>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentQustion, setCurrentQuestion] = useState(questions[Number(idParam) - 1]);
  const [selected, setSelected] = useState(0);
  const { open } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentQuestion(questions[Number(idParam) - 1]);
  }, [idParam, questions]);

  useEffect(() => {
    setSelected(answers.filter((ans) => ans.questionId === currentQustion?.id)[0]?.selectedChoiceId ?? 0);
  }, [currentQustion, answers]);

  const next = () => {
    if (idParam === questions?.length.toString()) {
      submitTest();
    } else if (selected !== 0) {
      selectAnswer(currentQustion.id, selected);
      navigate(`/certification/test/${Number(idParam) + 1}`);
    } else {
      open('답을 선택해주세요.', {
        closeOnOutsideClick: true,
        accept: {
          text: '확인',
          onClick: () => {},
        },
      });
    }
  };

  const prev = () => {
    if (Number(idParam) === 1) {
      navigate('/certification/guide');
    } else {
      navigate(`/certification/test/${Number(idParam) - 1}`);
    }
  };

  return (
    <Container>
      <Banner />
      <QuestionNumber>
        {idParam} / {questions.length}
      </QuestionNumber>
      <Qustion>{currentQustion?.questionText}</Qustion>
      <ChoiceContainer>
        {currentQustion?.choices.map((choice, index) => (
          <Choice
            key={choice.id}
            onClick={() => {
              setSelected(choice.id);
            }}
            selected={selected === choice.id}
          >
            {index + 1}. {choice.choiceText}
          </Choice>
        ))}
      </ChoiceContainer>

      <ButtonContainer>
        <Button
          buttonColor={idParam === '1' ? ButtonColor.GRAY : ButtonColor.MINT}
          buttonSize={ButtonSize.MEDIUM}
          onClick={prev}
        >
          이전
        </Button>
        <Button
          buttonColor={selected !== 0 ? ButtonColor.MINT : ButtonColor.GRAY}
          buttonSize={ButtonSize.MEDIUM}
          onClick={next}
        >
          {idParam === questions?.length.toString() ? '제출' : '다음'}
        </Button>
      </ButtonContainer>
    </Container>
  );
}
