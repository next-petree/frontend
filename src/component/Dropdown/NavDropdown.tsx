import { useNavigate } from "react-router-dom";
import { get } from "../../api/api";

import * as S from "./styles";
import { useState } from "react";

interface ILogoutResponse {
  data: string;
  status: string;
}

interface IDropdownProps {
  profileUrl?: string;
  loggedIn?: boolean;
}

const NavDropdown = ({ profileUrl, loggedIn }: IDropdownProps) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (!loggedIn) {
      navigate("/login");
    } else {
      alert("이미 로그인 상태입니다.");
    }
  };
  const handleLogoutClick = async () => {
    if (loggedIn) {
      try {
        const res = await get<ILogoutResponse>("/logout");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        if (res.data.status === "SUCCESS") {
          alert(res.data.data);
          navigate("/login");
        }
      } catch (error: any) {
        console.error(
          "로그아웃 에러:",
          error.response ? error.response.data : error.message
        );
      }
    } else {
      alert("로그인이 되어 있지 않습니다.");
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.TopBox>
          <S.UserProfileImage imgSrc={profileUrl}></S.UserProfileImage>
          <S.TextBox>
            서비스 이용을 위해{"\n"}
            로그인을 하세요.
          </S.TextBox>
        </S.TopBox>
        <S.BottomBox>
          <S.Button primary onClick={handleLoginClick}>
            로그인
          </S.Button>
          <S.Button onClick={handleLogoutClick}>로그아웃</S.Button>
        </S.BottomBox>
      </S.Container>
    </S.Wrapper>
  );
};

export default NavDropdown;
