import { styled } from 'styled-components';
import HeroImage from 'assets/images/main/hero.png';
import LogoPawWhite from 'assets/images/logo_paw_white.svg';
import LogoTextWhite from 'assets/images/logo_text_white.svg';
import BottomArrow from 'assets/images/main/bottom_arrow.svg';
import Layout from 'components/common/Layout';

const Hero = styled.section`
  width: 100%;
  height: 980px;
  background-color: #ddd;
  background-image: url(${HeroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const HeroSloganWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 980px;
  padding-top: 354px;
  #logo-paw {
    width: 127px;
    height: 127px;
    margin-bottom: 12px;
  }
  #logo-text {
    width: 197.407px;
    height: 64.841px;
    margin-bottom: 77px;
  }
  #hero-slogan {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.9px;
    margin: 0 0 150px;
  }
  #bottom-arrow {
    display: inline-flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

export default function HeroSection() {
  return (
    <Hero>
      <Layout>
        <HeroSloganWrapper id="hero-slogan-wrapper">
          <img id="logo-paw" src={LogoPawWhite} alt="logo-paw" />
          <img id="logo-text" src={LogoTextWhite} alt="logo-text" />
          <h1 id="hero-slogan" className="noto-sans-kr">
            반려견, 하나의 가족
            <br />그 이상을 넘어서
          </h1>
          <img id="bottom-arrow" src={BottomArrow} alt="bottom-arrow" />
        </HeroSloganWrapper>
      </Layout>
    </Hero>
  );
}
