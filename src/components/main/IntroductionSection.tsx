import { styled } from 'styled-components';
import Layout from 'components/common/Layout';

import Intro01 from 'assets/images/main/intro_1.png';
import Intro02 from 'assets/images/main/intro_2.png';
import Intro03 from 'assets/images/main/intro_3.png';

const Container = styled.div`
  width: 100%;
  margin: 7.63rem 0 3.13rem 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3.125rem;
  font-style: normal;
  font-weight: 800;
  line-height: 4rem; /* 128% */
  letter-spacing: -0.15625rem;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 2.63rem;
  justify-content: center;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-family: SUIT;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 800;
  line-height: 2.625rem; /* 150% */
  letter-spacing: -0.0875rem;
  margin-bottom: 8.06rem;
`;

export default function IntroductionSection() {
  return (
    <Layout>
      <Container>
        새로운 당신의 가족,
        <br />
        반려동물을 맞이하세요!
      </Container>
      <ImageContainer>
        <img src={Intro01} alt="intro_1" />
        <img src={Intro02} alt="intro_2" />
        <img src={Intro03} alt="intro_3" />
      </ImageContainer>
      <Text>사랑스러운 반려동물들을 따뜻한 가족의 품으로 함께 동참하세요!</Text>
    </Layout>
  );
}
