import { useLocation, useNavigate } from "react-router-dom";
import {
  AuthDeleteContainer,
  CategoryContent,
  CategoryContainer,
  Main,
  NavBarContainer,
} from "./Styles1";

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
  const navigation = useNavigate();
  const location = useLocation();

  const DeleteAccount = () => {
    navigation("/mypage/remove-account");
  };
  return (
    <NavBarContainer>
      <Main>
        {NavCategory.map(category => (
          <CategoryContainer
            onClick={() => navigation(`${category.link}`)}
            key={category.id}
            $isHere={location.pathname === category.link}
          >
            <CategoryContent>{category.name}</CategoryContent>
          </CategoryContainer>
        ))}
      </Main>
      <AuthDeleteContainer onClick={DeleteAccount}>
        <CategoryContent>회원 탈퇴</CategoryContent>
      </AuthDeleteContainer>
    </NavBarContainer>
  );
};

export default Navbar;
