import { useNavigate, useOutletContext } from 'react-router-dom';
import { IOutletContext } from '.';
import { useEffect } from 'react';
import { useModal } from 'hooks/useModal';
import { styled } from 'styled-components';
import Smiling from 'assets/images/certification/smiling.png';
import Hugging from 'assets/images/certification/hugging.png';
import Button, { ButtonColor, ButtonSize } from 'components/common/button/Button';
import { PATHS } from '../../constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10.56rem auto 10.94rem auto;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 1.25rem;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SubTitle = styled.h2`
  margin: 0;
  margin-bottom: 5.25rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Background = styled.img`
  position: absolute;
  top: 23rem;
  right: 0;
  width: 30.75825rem;
  height: 27.13013rem;
  flex-shrink: 0;
  z-index: -1;
`;

const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5.06rem;
  img {
    width: 9.94069rem;
    height: 14.65306rem;
    flex-shrink: 0;
  }
  span {
    font-size: 5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    strong {
      vertical-align: middle;
      font-size: 10rem;
      font-weight: 900;
    }
  }
`;

const ResultExplanation = styled.span<{ passed?: boolean }>`
  all: unset;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.75rem;
  margin-bottom: 1.75rem;
  strong {
    color: ${({ passed, theme }) => (passed ? theme.colors.blue : theme.colors.red)};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export default function Result() {
  const navigate = useNavigate();
  const { open } = useModal();
  const { testResult } = useOutletContext<IOutletContext>();

  useEffect(() => {
    if (!testResult) {
      // testResult가 없으면 잘못된 접근이므로 경고창을 띄워준다.
      open('잘못된 접근입니다.', {
        accept: {
          text: '확인',
          onClick: () => {
            window.history.back();
          },
        },
      });
    }
  }, [testResult, open]);

  return (
    <Container>
      <Background src={Hugging} alt="hugging" />
      <Title>반려인 지식 테스트</Title>
      <SubTitle>나의 지식 테스트 점수</SubTitle>
      <ScoreContainer>
        <span>
          <strong>{testResult?.score ?? 0}</strong>점
        </span>
        <img src={Smiling} alt="smiling" />
      </ScoreContainer>
      <ResultExplanation passed={testResult?.passed}>
        당신은 반려인이 되기 위한 기초지식테스트에 <strong>{testResult?.passed ? '합격' : '불합격'}</strong>하셨습니다.
      </ResultExplanation>
      <ButtonContainer>
        {testResult?.passed === false && (
          <Button buttonSize={ButtonSize.LARGE} onClick={() => navigate(PATHS.certification.guide)}>
            다시하기
          </Button>
        )}
        <Button
          buttonSize={ButtonSize.LARGE}
          buttonColor={ButtonColor.BLACK}
          onClick={() => navigate(PATHS.certification.explanation)}
        >
          해설 보기
        </Button>
      </ButtonContainer>
    </Container>
  );
}
