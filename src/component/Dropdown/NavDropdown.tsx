import { useNavigate } from "react-router-dom";
import { get } from "../../api/api";
import alertList from "../../utils/Swal1";

import * as S from "./Styles1";
import Swal from "sweetalert2";

interface ILogoutResponse {
  data: string;
  status: string;
}

interface IDropdownProps {
  profileUrl?: string;
  loggedIn?: boolean;
}

const NavDropdown = ({ loggedIn }: IDropdownProps) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = async () => {
    try {
      const res = await get<ILogoutResponse>("/logout");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      if (res.data.status === "SUCCESS") {
        await Swal.fire({
          ...alertList.successMessage(`${res.data.data}`),
          width: "350px",
        });
        navigate("/login");
      }
    } catch (error: any) {
      console.error(
        "로그아웃 에러:",
        error.response ? error.response.data : error.message,
      );
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.TopBox>
          <S.TextBox>
            {loggedIn
              ? "서비스 종료를 위해 로그아웃 하세요."
              : "서비스 이용을 위해 로그인 하세요."}
          </S.TextBox>
        </S.TopBox>
        <S.BottomBox>
          {!loggedIn && (
            <S.Button primary onClick={handleLoginClick}>
              로그인
            </S.Button>
          )}
          {loggedIn && (
            <S.Button onClick={handleLogoutClick}>로그아웃</S.Button>
          )}
        </S.BottomBox>
      </S.Container>
    </S.Wrapper>
  );
};

export default NavDropdown;
