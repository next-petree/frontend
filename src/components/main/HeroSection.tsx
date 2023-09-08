import { styled } from 'styled-components';
import Standing from 'assets/images/main/standing.png';
import Layout from 'components/common/Layout';
import Logo from 'components/common/logo/Logo';
import Button, { ButtonSize, ButtonColor, ButtonStyle } from 'components/common/button/Button';

const Container = styled.section`
  height: 800px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const Background = styled.svg`
  width: 1920px;
  height: 786px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  h3 {
    margin: 32px 0 12px 0;
    color: #fff;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.5px;
  }
  h4 {
    color: #a8fffd;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.9px;
    margin: 0 0 36px 0;
  }
`;

const Character = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export default function HeroSection() {
  return (
    <Layout>
      <Background>
        <path d="M0 0H1920V586L0 786V0Z" fill="url(#paint0_linear_519_6630)" />
        <defs>
          <linearGradient
            id="paint0_linear_519_6630"
            x1="666.5"
            y1="317.5"
            x2="2830.89"
            y2="1092.73"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3BBAB8" />
            <stop offset="0.656796" stopColor="#8FF9DF" />
            <stop offset="1" stopColor="#91F98F" />
          </linearGradient>
        </defs>
      </Background>

      <Container>
        <TitleContainer>
          <Logo color="white" size="large" />
          <h3>
            반려동물, <br />
            새로운 당신의 가족입니다.
          </h3>
          <h4>또 하나의 가족이 될 반려견을 분양하세요.</h4>
          <Button
            buttonColor={ButtonColor.TRANSPARENT}
            buttonStyle={ButtonStyle.OUTLINE}
            buttonSize={ButtonSize.MEDIUM}
          >
            강아지 둘러보기
          </Button>
        </TitleContainer>
        <Character src={Standing} alt="standing" />
      </Container>
    </Layout>
  );
}
