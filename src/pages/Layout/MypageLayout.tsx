import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import LogoPow from "assets/images/mypage/subbanner/logo_paw_brown.svg";
import LogoText from "assets/images/mypage/subbanner/logo_text_brown.svg";
import Background from "assets/images/mypage/subbanner/sub_banner_background.png";
import BackgroundAvif from "assets/images/mypage/subbanner/sub_banner_background.avif";
import BackgroundWebp from "assets/images/mypage/subbanner/sub_banner_background.webp";
import Picture from "@component/common/PictureEl";

interface IMypageLayout {
  children: React.ReactNode;
}

export default function MypageLayout({
  children,
  ...props
}: IMypageLayout & HTMLAttributes<HTMLDivElement>) {
  return (
    <Container {...props}>
      <HeaderWrap>
        <Picture
          className="background"
          imgUrl={Background}
          avifUrl={BackgroundAvif}
          webpUrl={BackgroundWebp}
          imgAlt="서브배너 강아지"
        />
        <div className="logo">
          <img className="logo-pow" src={LogoPow} alt="펫트리 로고 발바닥" />
          <img className="logo-text" src={LogoText} alt="펫트리 로고 텍스트" />
        </div>
      </HeaderWrap>
      <ContainerWrap>
        <SideMenu className="side-menu">
          <Gap />
          <Button>회원탈퇴</Button>
        </SideMenu>
        <ContentWrap>{children}</ContentWrap>
      </ContainerWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrap = styled.div`
  position: relative;
  width: 100%;
  height: 383px;
  background-color: #4ec1bf;
  overflow: hidden;
  .background img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1920px;
    height: 383px;
  }
  .logo {
    padding: 24px 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(calc(-100% - 224px), -50%);
    display: flex;
    align-items: center;
    gap: 17px;
    &-pow {
      width: 107.826px;
      height: 107.826px;
      flex-shrink: 0;
    }
    &-text {
      width: 218.456px;
      height: 71.754px;
      flex-shrink: 0;
    }
  }
`;

const ContainerWrap = styled.div`
  margin-top: -100px;
  margin: -100px 0 100px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  gap: 35px;
  min-width: 1400px;
  height: 100%;
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  width: 325px;
  height: 58rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 83%;
`;

const Button = styled.button`
  width: 100%;
  height: 4.4rem;
  font-size: 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const Gap = styled.div`
  flex: 1;
`;

MypageLayout.Label = function Label({
  subText,
  children,
}: {
  subText?: string;
  children: React.ReactNode;
}) {
  return (
    <LabelWrap>
      <h4>{children}</h4>
      {subText && <p className="sub-text">{subText}</p>}
    </LabelWrap>
  );
};

const LabelWrap = styled.div`
  margin-bottom: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  h4 {
    font-size: 1.75rem;
    font-style: normal;
    font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
    font-weight: 500;
    line-height: 2.25rem;
  }
  p {
    color: #7a7a7a;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
  }
`;

MypageLayout.Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
MypageLayout.ContentsHeaders = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

MypageLayout.Content = styled.div``;

MypageLayout.Footer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
