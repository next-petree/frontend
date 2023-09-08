import { styled } from 'styled-components';
import Layout from 'components/common/Layout';
import Button, { ButtonColor, ButtonSize, ButtonStyle } from 'components/common/button/Button';

import Breeder01 from 'assets/images/main/breeder_sample_1.jpeg';
import Breeder02 from 'assets/images/main/breeder_sample_2.jpeg';

const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.375rem; /* 135% */
  letter-spacing: -0.125rem;
  margin: 5.25rem 0 1.75rem 0;
`;

const SubTitle = styled.span`
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.25rem; /* 150% */
  letter-spacing: -0.075rem;
  margin-bottom: 1.75rem;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 44.8125rem;
  flex-shrink: 0;
  z-index: -1;
  background: linear-gradient(324deg, #3cbe9f 8.33%, #8ff9b9 100%);
`;

const ImageContainer = styled.div`
  margin: 4.38rem 0 3.12rem 0;
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  img {
    width: 30rem;
    height: 21.25rem;
    border-radius: 1rem;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 1.88rem;
  span {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 9999px;
    padding: 0.63rem 1.88rem;
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.625rem; /* 175% */
    letter-spacing: -0.075rem;
  }
  margin-bottom: 17.37rem;
`;

export default function BreederLinksSection() {
  return (
    <Layout>
      <Background />
      <Title>
        펫트리와 함께,
        <br /> 분양 서비스를 시작하세요!
      </Title>
      <SubTitle>섬세한 브리더의 손길로 탄생한 반려견과 함께하세요!</SubTitle>
      <Button buttonColor={ButtonColor.TRANSPARENT} buttonStyle={ButtonStyle.OUTLINE} buttonSize={ButtonSize.MEDIUM}>
        브리더 둘러보기
      </Button>
      <ImageContainer>
        <img src={Breeder01} alt="breeder01" />
        <img src={Breeder02} alt="breeder02" />
      </ImageContainer>
      <Tags>
        <span>#펫트리</span>
        <span>#브리더</span>
        <span>#반려동물</span>
        <span>#댕댕이</span>
        <span>#가족</span>
      </Tags>
    </Layout>
  );
}
