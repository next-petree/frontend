import { useNavigate } from "react-router-dom";

import * as S from "./styles";

const NavDropdown = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleLogoutClick = () => {
    console.log("Logout");
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.TopBox>
          <S.UserProfileImage />
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
