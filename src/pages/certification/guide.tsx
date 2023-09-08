import { styled } from 'styled-components';
import Button from 'components/common/button/Button';
import Card from 'components/certification/Card';

import Image01 from 'assets/images/certification/icon01.svg';
import Image02 from 'assets/images/certification/icon02.svg';
import Image03 from 'assets/images/certification/icon03.svg';
import Image04 from 'assets/images/certification/icon04.svg';
import Image05 from 'assets/images/certification/icon05.svg';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { PATHS } from '../../constants';
import { IOutletContext } from '.';
import { useEffectOnce } from 'hooks/useEffectOnce';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 11rem auto;
`;

const TitleContainer = styled.div`
  font-style: normal;
  line-height: normal;
  text-align: center;
  gap: 0.81rem;
  margin-bottom: 4.75rem;
`;

const Title = styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2.5rem;
  margin-bottom: 5.63rem;
`;

export default function Guide() {
  const { reset, fetchQuestions } = useOutletContext<IOutletContext>();
  useEffectOnce(() => {
    reset();
  });

  const navigate = useNavigate();
  return (
    <Container>
      <TitleContainer>
        <SubTitle>반려동물에 대한 지식과 이해를 높이기 위한</SubTitle>
        <Title>2023년 반려인 지식 문제은행 안내</Title>
      </TitleContainer>
      <CardContainer>
        <Card
          image={Image01}
          title="반려동물에 대한 지식과 이해를 높이기 위한"
          description={
            <Card.Span>
              올바른 반려문화 조성을 위해 반려동물(강아지, 고양이)양육돌봄문제와 동물보호법 등 서울시 정책문제를
              <br />
              주기적으로 온라인에 공개하는 문제은행 입니다.
            </Card.Span>
          }
        />
        <Card
          image={Image02}
          title="문제은행 내용은 어떻게 되나요?"
          description={
            <Card.Span>
              문제는 크게 강아지, 고양이부문과 양육단계별로 구분되어 있고 정답과 해설이 같이 포함되어있습니다.
              <br />
              문제들은 강아지, 고양이 관련 야육 돌봄지식 그리고 동물 보호법 및 서울시 동물 보호정책 내용들을 묻고
              <br />
              있습니다.
            </Card.Span>
          }
        />
        <Card
          image={Image03}
          title="출제자는 누구인가요?"
          description={
            <Card.Span>
              양육돌봄지식 문제(건강관리, 행동학, 영양학 등)는 서울시수의사회에서 문제를 제공해주셨고,
              <br />
              동물보호법 및 서울시 동물보호정책은 서울시 동물보호과에서 출제하였습니다.
            </Card.Span>
          }
        />
        <Card
          image={Image04}
          title="언제 공개되나요?"
          description={
            <Card.Span>
              2023년 5월 2일 부터 2주 간격으로 매달 2회씩(회당 24문제)가 공개됩니다.
              <br />
              공개장소 : 교육 &gt; 반려인 지식문제은행 공개 게시판
            </Card.Span>
          }
        />
        <Card
          image={Image05}
          title="어떻게 활용하나요?"
          description={
            <Card.Span>
              반려동물에 관심이 있는 시민이면 누구나 참여하여 반려동물에 대한 지식확인, 그리고 틀린 문제 해설을
              <br />
              통해 새로운 정보들을 얻는 기회가 되시길 바랍니다!
            </Card.Span>
          }
        />
      </CardContainer>
      <Button
        onClick={() => {
          fetchQuestions();
          navigate(PATHS.certification.test.root + '/1');
        }}
      >
        테스트 실시
      </Button>
    </Container>
  );
}
