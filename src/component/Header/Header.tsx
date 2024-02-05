import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectBreederProfile,
  setProfileImg,
} from "../../redux/Breeder1/BreederSlice1";

import {
  Container,
  TitleArea,
  TitleLogo,
  TitleText,
  HeaderContent,
  HamburgerIcon,
  NavigationMenu,
  NavigationLink,
  UserProfileImage,
} from "./HeaderStyle";

import DecodeToken from "../../utils/DecodeJWT/DecodeJWT";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import alertList from "../../utils/Swal1";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();
  const profileImg = useAppSelector(selectBreederProfile);
  const dispath = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1300) {
        setIsDropdownVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    if (window.innerWidth <= 1300) {
      setIsDropdownVisible(!isDropdownVisible);
    }
  };

  const handleClick = async () => {
    if (isLoggedIn) {
      navigate("/mypage/modifyauth");
    } else {
      const answer = await Swal.fire({
        ...alertList.infoMessage("로그인을 먼저 진행해주세요."),
      });
      if (answer) navigate("/login");
    }
  };

  const decodedData = DecodeToken();

  useEffect(() => {
    if (
      sessionStorage.getItem("accessToken") &&
      sessionStorage.getItem("refreshToken")
    ) {
      setIsLoggedIn(true);
      dispath(setProfileImg(localStorage.getItem("profileImg")!));
    }
  }, []);

  return (
    <Container>
      <TitleArea to="/">
        <TitleLogo />
        <TitleText />
      </TitleArea>
      <HeaderContent>
        {windowWidth <= 1300 && <HamburgerIcon onClick={toggleDropdown} />}
        {(windowWidth > 1300 || isDropdownVisible) && (
          <NavigationMenu className={isDropdownVisible ? "visible" : ""}>
            {decodedData?.role === "BREEDER" ? (
              <>
                <NavigationLink to="/certify">브리더 인증받기</NavigationLink>
                <NavigationLink to="/dogys/1">강아지 모아보기</NavigationLink>
                <NavigationLink to="/breeders/1">
                  브리더 모아보기
                </NavigationLink>
              </>
            ) : (
              <>
                <NavigationLink to="/test-description">
                  인증 테스트
                </NavigationLink>
                <NavigationLink to="/dogys/1">강아지 모아보기</NavigationLink>
                <NavigationLink to="/breeders/1">
                  브리더 모아보기
                </NavigationLink>
              </>
            )}
          </NavigationMenu>
        )}

        <div onClick={handleClick}>
          <UserProfileImage $imgSrc={profileImg!} />
        </div>
      </HeaderContent>
    </Container>
  );
};

export default Header;
