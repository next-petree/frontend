import { useLocation, useNavigate } from "react-router-dom";
import {
  AuthDeleteContainer,
  Category,
  CategoryContainer,
  Main,
  NavBarContainer,
} from "./styles";

export const NavCategory = [
  {
    id: 1,
    name: "분양신청내역",
    // App.tsx에 만들어두신 url을 link에 주소로 넣어놓으시면 됩니다.
    link: "/adoptlist/breeder",
  },
  {
    id: 2,
    name: "보유견종 관리",
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
  const navi = useNavigate();
  const location = useLocation();
  return (
    <NavBarContainer>
      <Main>
        {NavCategory.map((cate) => (
          <CategoryContainer onClick={() => navi(`${cate.link}`)} key={cate.id} $isHere={location.pathname === cate.link}>
          <CategoryContainer
            onClick={() => navi(`${cate.link}`)}
            key={cate.id}
            $isHere={location.pathname === cate.link}
          >
            <Category>{cate.name}</Category>
          </CategoryContainer>
        ))}
      </Main>
      <AuthDeleteContainer>
        <Category>회원 탈퇴</Category>
      </AuthDeleteContainer>
    </NavBarContainer>
  );
};

export default Navbar;
