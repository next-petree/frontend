import React, { useEffect, useState } from "react";
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

import NavDropdown from "../Dropdown/NavDropdown";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isCilcked, setIsCilcked] = useState<boolean>(false);
  const handleClick = () => {
    setIsCilcked((prev) => !prev);
  };

  useEffect(() => {
    if (
      localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken")
    ) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Container>
      <TitleArea to="/">
        <TitleLogo />
        <TitleText />
      </TitleArea>
      <HeaderContent>
        <NavigationMenu>
          <NavigationLink to="/test-description">인증 테스트</NavigationLink>
          <NavigationLink to="/dogys/1">강아지 모아보기</NavigationLink>
          <NavigationLink to="/breeders/1">브리더모아보기</NavigationLink>
        </NavigationMenu>
        <div onClick={handleClick}>
          <UserProfileImage />
        </div>
      </HeaderContent>

      {isCilcked && <NavDropdown loggedIn={isLoggedIn} />}
    </Container>
  );
};

export default Header;
