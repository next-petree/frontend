import React from "react";
import {
  Container,
  InnerContent,
  LeftArea,
  TitleArea,
  TitleLogo,
  TitleTextLogo,
  InnerTextArea,
  InnerText,
  RightArea,
  CategoriesMenu,
  CategoriesLink,
  PagesMenu,
  PagesLink,
  BottomArea,
  CopyRightLogo,
  CopyrightBanner,
} from "./FooterStyle";

const Footer = () => {
  return (
    <Container>
      <InnerContent>
        <LeftArea>
          <TitleArea>
            <TitleLogo />
            <TitleTextLogo />
          </TitleArea>

          <InnerTextArea>
            <InnerText>
              펫트리는 브리더 서비스를 하는
              <br />
              기관입니다. 더 많은 가족이 브리더의
              <br /> 서비스를 통해 가족을 만날 수 있도록
              <br />
              최선을 다하겠습니다.
            </InnerText>
          </InnerTextArea>
        </LeftArea>

        <RightArea>
          <CategoriesMenu>
            Categories
            <CategoriesLink to="/auth-test">인증 테스트</CategoriesLink>
            <CategoriesLink to="/dogs">강아지 모아보기</CategoriesLink>
            <CategoriesLink to="/breeders">브리더모아보기</CategoriesLink>
          </CategoriesMenu>

          <PagesMenu>
            Pages
            <PagesLink to="/">About Us</PagesLink>
            <PagesLink to="/">Contact Us</PagesLink>
          </PagesMenu>
        </RightArea>
      </InnerContent>

      <BottomArea>
        <CopyRightLogo />
        <CopyrightBanner>2023 Breeder Inc. All rights reserved</CopyrightBanner>
      </BottomArea>
    </Container>
  );
};

export default Footer;
