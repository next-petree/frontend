import React from "react";
import {
  Container,
  TitleArea,
  TitleLogo,
  TitleText,
  HeaderContent,
  NavigationMenu,
  NavigationLink,
  UserProfileImage,
} from "./HeaderStyle";

const Header = () => {
  return (
    <Container>
      <TitleArea to="/">
        <TitleLogo />
        <TitleText />
      </TitleArea>

      <HeaderContent>
        <NavigationMenu>
          <NavigationLink to="/auth-test">인증 테스트</NavigationLink>
          <NavigationLink to="/dogs">강아지 모아보기</NavigationLink>
          <NavigationLink to="/breeders">브리더모아보기</NavigationLink>
        </NavigationMenu>
        <UserProfileImage />
      </HeaderContent>
    </Container>
  );
};

export default Header;
