import * as S from "./style";
import Picture from "@component/common/PictureEl";
import HeroImage from "assets/images/main/hero.png";
import HeroImageAvif from "assets/images/main/hero.avif";
import HeroImageWebp from "assets/images/main/hero.webp";
import LogoPawWhite from "assets/images/logo_paw_white.svg";
import LogoTextWhite from "assets/images/logo_text_white.svg";
import BottomArrow from "assets/images/main/bottom_arrow.svg";
export const HeroSection = () => {
  return (
    <S.Hero>
      <Picture
        className="background"
        imgUrl={HeroImage}
        avifUrl={HeroImageAvif}
        webpUrl={HeroImageWebp}
        imgAlt="히어로 이미지"
      />
      <S.Container>
        <S.InnerContainer>
          <S.HeroSloganWrapper id="hero-slogan-wrapper">
            <img id="logo-paw" src={LogoPawWhite} alt="logo-paw" />
            <img id="logo-text" src={LogoTextWhite} alt="logo-text" />
            <h1 id="hero-slogan" className="noto-sans-kr">
              반려견, 하나의 가족
              <br />그 이상을 넘어서
            </h1>
            <img id="bottom-arrow" src={BottomArrow} alt="bottom-arrow" />
          </S.HeroSloganWrapper>
        </S.InnerContainer>
      </S.Container>
    </S.Hero>
  );
};
