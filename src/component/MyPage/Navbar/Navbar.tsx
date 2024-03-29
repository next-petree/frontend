import { useLocation, useNavigate } from "react-router-dom";
import DecodeToken from "../../../utils/DecodeJWT/DecodeJWT";
import Swal from "sweetalert2";
import alertList from "../../../utils/Swal1";
import { removeToken } from "../../../api/token";
import {
  AuthDeleteContainer,
  CategoryContent,
  CategoryContainer,
  Main,
  NavBarContainer,
  LogoutContainer,
  MenuIcon,
  Overlay,
} from "./Styles1";
import { useAppDispatch } from "../../../redux/hooks";
import { setProfileImg } from "../../../redux/Breeder1/BreederSlice1";
import { useEffect, useState } from "react";

export const NavCategory = [
  {
    id: 1,
    name: "분양신청내역",
    link: "",
  },
  {
    id: 2,
    name: "",
    link: "",
  },
  {
    id: 3,
    name: "프로필 관리",
    link: "/mypage/profile",
  },
  {
    id: 4,
    name: "회원정보 수정",
    link: "/mypage/modifyauth",
  },
];

const Navbar = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const dispath = useAppDispatch();

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  const decodedJWT = DecodeToken();
  let roleBasedLink = "/mypage/adoptlist/breeder";

  if (decodedJWT.role === "ADOPTER") {
    roleBasedLink = "/mypage/adoptlist/adopter";
  }

  NavCategory.map((category) => {
    if (category.id === 2) {
      if (decodedJWT.role === "ADOPTER") {
        category.name = "리뷰 관리";
        category.link = "/mypage/review/1";
      } else if (decodedJWT.role === "BREEDER") {
        category.name = "보유 견종 관리";
        category.link = "/mypage/owndogs/1";
      }
    }
  });

  const NavCategoryWithRole = NavCategory.map((category) => {
    if (category.name === "분양신청내역") {
      return { ...category, link: roleBasedLink };
    }

    return category;
  });

  const DeleteAccount = () => {
    navigation("/mypage/remove-account");
  };

  const handleLogout = async () => {
    const answer = await Swal.fire(
      alertList.doubleCheckMessage("로그아웃 하시겠습니까?")
    );

    if (answer.isConfirmed) {
      try {
        removeToken("accessToken");
        removeToken("refreshToken");
        localStorage.removeItem("profileImg");
        dispath(setProfileImg(""));
        navigation("/");
        Swal.fire(alertList.successMessage("로그아웃이 완료되었습니다"));
      } catch (error) {
        console.error("로그아웃 중 오류 발생:", error);
      }
    }
  };

  return (
    <>
      {(windowWidth <= 1100) && (
        <MenuIcon onClick={toggleDropdown}>메뉴</MenuIcon>
      )}
      {(windowWidth > 1100 || isDropdownVisible) && (
        <Overlay onClick={toggleDropdown} className={isDropdownVisible ? "visible" : ""}>
          <NavBarContainer className={isDropdownVisible ? "visible" : ""}>
            <Main>
              {NavCategoryWithRole.map((category) => (
                <CategoryContainer
                  onClick={() => navigation(`${category.link}`)}
                  key={category.id}
                  $isHere={location.pathname === category.link}
                >
                  <CategoryContent>{category.name}</CategoryContent>
                </CategoryContainer>
              ))}
              <LogoutContainer onClick={handleLogout}>
                <CategoryContent style={{ color: "red" }}>
                  로그아웃
                </CategoryContent>
              </LogoutContainer>
            </Main>
            <AuthDeleteContainer onClick={DeleteAccount}>
              <CategoryContent>회원탈퇴</CategoryContent>
            </AuthDeleteContainer>
          </NavBarContainer>
        </Overlay>
      )}
    </>
  );
};

export default Navbar;
